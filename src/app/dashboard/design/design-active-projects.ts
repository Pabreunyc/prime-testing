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
        let team = '', year, availYears = [];
        res.reduce( (p,c) => {
            team = c['managing_design_team_unit'];
            year = Number(c['design_start_date'].split('-')[0]);
            availYears.push(year);
            //console.log({team}, p);
            if(team in p) {
                p[team]['target'] += c['total_plan_amount'];
                if(c['late_project'] != 0) {
                    p[team]['late_project']++;
                }
                p[team]['total_active']++;

                if( p[team]['design_start_date_year'][year] ) {
                    p[team]['design_start_date_year'][year]++;
                } else {
                    p[team]['design_start_date_year'][year] = [];
                    p[team]['design_start_date_year'][year] = 1;
                }
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
                p[team]['design_start_date_year'] = [];
                p[team]['design_start_date_year'][year] = 1;
                p[team]['avg_cycle'] = 0;
            }
            return p;
        },t);
        console.log({availYears});
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
            'dataKey': "team",
            'options': {
                'availableYears': new Set(availYears.sort( (a,b) => {return a-b} ))
            }
        };
        console.log({ret});
        return ret;
    }

    OcreateChartData(data:Array<any>) {
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
        let years = [];
        data.map(e => { e['design_start_date_year'].forEach((p,i) => {if(p) years[i] = true;})});
        console.log({years});
        let d = {
            data: {
                labels: data.map(el => el.team),
                datasets: [
                    {   
                        label:'2015', 
                        type: 'bar',
                        data: data.map(el => el.total_active),
                        backgroundColor:CHART_COLORS[0],
                        yAxisID: 'y-axis-1'
                    },
                    {
                        label:'2016',
                        type:'bar',
                        data:[10,20,40,50,30,12,25,30,10],
                        backgroundColor:CHART_COLORS[2],
                        yAxisID: 'y-axis-2'
                    }
                    
                ]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked:true, 
                        ticks: {
                            fontColor: '#495057',
                            minRotation: 45,
                            maxRotation: 90,
                        }
                    }],
                    yAxes: [{
                        stacked:true, 
                        ticks: {
                            fontColor: '#ff0000'
                        }
                    }]
                }
            }
        };
        console.log({d});
        return d;
    }

    createChartData(data:any) {
        let _options = data.options;
        let _data = [...data.data];
        console.log("createChartData:", _data, _options);
        
        let years = Array.from(_options.availableYears);
        const numColors = CHART_COLORS.length;
        
        let yearlyData = [];
        for(let i=0; i<_data.length; i++) {
            let dsy = _data[i]['design_start_date_year'];
            let tmp = [];
            years.forEach(y => {
                tmp.push( dsy[Number(y)] ? dsy[Number(y)] : 0 );
            });
            _data[i]['yearly_data'] = tmp;
        }
        console.log({_data});
        
        let ds = [];
        years.forEach( (v,i) => {
            ds.push( {
                label: v + '',
                backgroundColor: CHART_COLORS[i % numColors],
                data: _data.map( e => e['yearly_data'][i])
            })
        });
        let d = {};
        d['data'] = {
            labels: _data.map(el => el.team),
            datasets: ds
        };
        d['options'] = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
        return d;
    }
}

function getRandomIntInclusive(min, max) {
    // The maximum is inclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min )) + min;
}