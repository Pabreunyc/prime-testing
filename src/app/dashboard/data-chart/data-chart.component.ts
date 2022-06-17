import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit, OnDestroy, OnChanges {
  @Input() x;
  public tableData;
  // public tableData = {
    // dataKey: '',
    // cols:[],
    // data:[]
  // };
  public chartData;
  public selectedRow:any = null;

  constructor(
    private ds:DataService
  ) { }
  
  ngOnInit(): void {
    console.log('%cDataChartComponent', 'background-color:green;color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cDataChartComponent', 'background-color:red;color:white;');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes.x.currentValue);
    this.tableData = changes.x.currentValue.table;
    this.chartData =  changes.x.currentValue.chart;
  }

// ----------------------------------------------------------------------------
  onRowSelect(evt:any) {
    console.log('onRowSelect:', evt);
  }
  onRowUnSelect(evt:any) {
    console.log('onRowUnSelect:', evt);
  }

  updateChart(evt:any) {
    console.log('updateChart:', typeof evt, evt);
  }
// ----------------------------------------------------------------------------
  private _init() {
    // this.ds.getGithubData({url:'repos'}).subscribe(
    //   res => {
    //     console.log(typeof res, res);
    //     this.data = res as Array<any>;
    //   }
    // )
  }
}
