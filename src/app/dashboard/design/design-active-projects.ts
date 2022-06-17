export interface ITableColDefinition {
    header:string;
    field:string;
    sortable?:boolean;
    resizeable?:boolean
}
export interface ITableDefinition  {
    cols: ITableColDefinition[];
    data?: Array<any>;
    dataKey?: string;
};

const CHART_COLORS = ["#B3B514","#E2807F","#B7B8F1","#5FB5B6","#B1FFAF","#FFF25B","#AF5868","#82E4FD"];
;
export class DesignActiveProjects {
    private _instance:number;

    constructor() {
        this._instance = Math.random()
    }

    ping() {
        return this._instance;
    }

    createTableData(res:Array<any>, tableDef:ITableDefinition) {
        console.log('*** createActiveTableData:Table Data ***');
        let t = {};
        let team = '';
        res.reduce( (p,c) => {
            team = c['managing_design_team_unit'];
            //console.log({team}, p);
            if(team in p) {
                p[team]['target'] += c['total_plan_amount'];
                if(c['late_project'] != 0) {
                p[team]['late_project']++;
                }
                p[team]['total_active']++;
                p[team]['design_start_date_year'].push( c['design_start_date'].split('-')[0] );
                p[team]['avg_cycle'] = 0;
            } else {
                p[team] = {};
                p[team]['target'] = c['total_plan_amount'];
                p[team]['late_project'] = 0;
                if(c['late_project'] != 0) {
                    p[team]['late_project'] = 1;
                }
                p[team]['late_project'] = c['late_project'] != 1 ? 1 : 0;
                p[team]['total_active'] = 1;
                p[team]['avg_cycle'] = 0;
                p[team]['design_start_date_year'] = [];
            }
            return p;
            },
        t);
        let d = [];
        for(let p in t) { d.push({...t[p], 'team':p}); }
        

        let ret = {
            'cols': [
                {header:'Design Team', field:'team'},
                {header:'Target', field:'target'},
                {header:'Late Projects', field:'late_project'},
                {header:'Total Active', field:'total_active'},
                {header:'Avg Cycle Time (Day)', field:'avg_cycle'}
                ],
            'data': d,
            'dataKey': "team"
        };
        console.log({ret});
        return ret;
    }

    createChartData(data:Array<any>) {
        console.log('*** createChartData ***');
        console.log(data);
        // let d = {
        //     data: {
        //         labels: data.map(el => el.team),
        //         datasets: data.map((el,i) => {
        //             return { label:el['team'], data:[el['total_active']], backgroundColor:CHART_COLORS[i]};
        //         }),
        //     }
        // };
        let d = {
            data: {
                labels: data.map(el => el.team),
                datasets: [
                    {   
                        label:'data one', 
                        type: 'bar',
                        data: data.map(el => el.total_active),
                        backgroundColor:CHART_COLORS[0]},
                    
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#495057',
                            minRotation: 45,
                            maxRotation: 90,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#495057'
                        }
                    }]
                }
            }
        };
        console.log({d});
        return d;
    }
}
