import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { DataService } from 'src/app/_services/data.service';
import { DesignActiveProjects } from './design-active-projects';
interface fn {
  (param: string):void;
}
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['../dashboard-common.css', './design.component.css']
})
export class DesignComponent implements OnInit, OnDestroy {
  private dataCB:any = null;

  data = null;
  mode = '';

  constructor(
    private ds:DataService
  ) { }

  ngOnInit(): void {
    console.log('%cDesignComponent', 'background-color:green;color:white;');
    this._init();
    let x = new DesignActiveProjects()
    console.log(x.ping());
  }
  ngOnDestroy(): void {
    console.log('%cDesignComponent', 'background-color:red;color:white;');
  }

// ----------------------------------------------------------------------------
  display(dataSet, view) {
    // 'active', 'summary'
    console.log('display:', dataSet, view);

    let res = this.dataCB[dataSet](view);
    console.log(res);
    this.mode = view;
  }
// ----------------------------------------------------------------------------
  private getActiveData(view) {
    console.log('getActiveData:', view);
    //console.log(this);
    if(view === 'summary') {
      this.getGithubSummaryData();
    }
  }

  private getGithubSummaryData() {
    console.log('getGithubSummaryData');
    this.foo();
    this.ds.getDesignData().pipe(delay(1000)).subscribe(
      res => {
        // table data
          console.time('*** Table Data ***');
          let t = {};
          let team = '';
          (res as Array<any>).reduce( (p,c) => {
            team = c['managing_design_team_unit'];
            //console.log({team}, p);
            if(team in p) {
              p[team]['target'] += c['total_plan_amount'];
              if(c['late_project'] != 0) {
                p[team]['late_project']++;
              }
              p[team]['total_active']++;
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
            }
            return p;
          }, t);
          let d = [];
          for(let p in t) { d.push({...t[p], 'team':p}); }
          this.data = {};
          this.data['table'] = {
            'cols':[
              {header:'Design Team', field:'team'},
              {header:'Target', field:'target'},
              {header:'Late Projects', field:'late_project'},
              {header:'Total Active', field:'total_active'},
              {header:'Avg Cycle Time (Day)', field:'avg_cycle'}
            ],
            'data': d,
            'dataKey': 'team'
          };
          console.log(this.data);
          console.timeEnd('*** Table Data ***');
      }
    )
  }    

  private _init() {
    this.dataCB = {
      'active': (view) => this.getActiveData(view),
      'complete': (x) => { console.log('complete:', x*2); }
    };
  }
  
// ----------------------------------------------------
  private foo() { console.log('-- FOO ---'); }
}
function goo() { console.log('goo'); }