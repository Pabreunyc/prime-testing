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
    let x = new DesignActiveProjects();
    let y = new DesignActiveProjects();
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
    this.ds.getDesignData().pipe().subscribe(
      res => {
        // table data
        let activeProject = new DesignActiveProjects();
        this.data= {};
        this.data['table'] = activeProject.createTableData(res as Array<any>,null);
        this.data['chart'] = activeProject.createChartData( this.data['table'].data );
        console.log(this.data);
      },
      err => { console.error('ERR:', err); }
    );
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