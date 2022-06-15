import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() data;

  public data$:Observable<any>|null = null;
  public tableDef = {
    dataKey:'',
    cols: []
  };
  public loading:boolean = false;
  public selectedRow = null;

  constructor() { }
  
  ngOnInit(): void {
    console.log('%cChildTableComponent', 'background-color:green; color:white;');
    console.log('ChildTableComponent.data:', this.data);
  }
  ngOnDestroy(): void {
    console.log('%cChildTableComponent', 'background-color:red; color:white;');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.data.currentValue) {
      console.log('changes:', changes.data.currentValue);
      this._init();
    }
  }
// ----------------------------------------------------------------------------
  onRowSelect(evt) {
    console.log('onRowSelect',evt);
  }
  onRowUnSelect(evt) {
    console.log('onRowUnSelect',evt);
  }
// ----------------------------------------------------------------------------
  private _init() {
  }

  private _initTable() {
    this.tableDef.dataKey = 'language';
    this.tableDef.cols = [
      {header:'Language', 'field':'language' },
      {header:'Count', 'field': 'count'}
    ];
  }
}
