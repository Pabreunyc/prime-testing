import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../_services/data.service';
import { delay, finalize, tap } from 'rxjs/operators';
import { FilterService, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-tables1',
  templateUrl: './tables1.component.html',
  styleUrls: ['./tables1.component.css']
})
export class Tables1Component implements OnInit, OnDestroy, AfterViewInit { 
  @ViewChild('pt') dataTableRef:Table;
  private _data;
  public data;
  public data$:Observable<any> = null;

  public tableDef = {
    dataKey:'',
    cols: []
  };
  public plateStatusSelect:SelectItem[] = [{value:"wi_plates", label:"Wi. Plates"}, {value:"wo_plates", label:"W/O Plates"}, {value:"", label:"All"}];
  public employeeTypeSelect:SelectItem[] = [{label:'All', value:'all'}, {label:'Employee',value:'employee'}, {label:'Non',value:'non'}];
  public parkingZones = [];
  public loading:Boolean = false;
  public loading2:Boolean = false;
  public selectedRow = null;


  constructor(
    private ds:DataService,
    private filterService: FilterService
  ) { }

  ngAfterViewInit(): void {
    console.log('afterViewInit:', this.dataTableRef);
  }
  ngOnInit(): void {
    console.log('%cTables1Component', 'background-color:green;color:white;');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cTables1Component', 'background-color:red;color:white;');
  }
// ============================================================================
  public selectView(view) {
    console.log('selectView:', view);
  }
  
  public exportToExcel() {
    console.log('Exporting to Excel');
    this.dataTableRef.exportCSV();
  }

  public filterByParkingZone(e) {
    console.log('filterByParkingZone', {e});
  }
  public selectWithPlates(e) {
    console.log('selectWithPlates', {e});
  }
  public filterByEmployeeType(e) {
    const type = (e.value || '').trim().toLowerCase();
    console.log('filterByEmployeeType', {e});

    let r;
    this.data = this._data.filter( e => {
      switch(type) {        
        case 'employee':  { r = e.user_id < 900_000_000; break; }
        case 'non':  { r = e.user_id >= 900_000_000; break; }
        case 'all':
        default: { r = e; break; }
      }
      return e;
    });

    console.log(this.data);
  }


  onRowSelect(e) {
    console.log('onRowSelect', {e});
  }
  onRowUnSelect(e) {
    console.log('onRowUnSelect', {e});
  }
// ============================================================================
  private _init() {
    this.loading = true;
    this.loading2 = true;
    this._initTable();

    this.data$ = this.ds.getGithubData({url:'repos'}).pipe(
      delay(2000),
      tap(console.log),
      tap(el => { console.log('tap'); this.loading2 = false; return el; }),
    );

    this.ds.getCapitalArchivesData().subscribe(
      d => { console.log(d); }
    );

    parking_zone_id: 6
    parking_zone_name: "Mets Lot"

    this.ds.getList().pipe(
      finalize( () => { this.loading = false;} )
    ).subscribe(
      (resp) => {
        console.log('getList', resp);
        this.data = resp;
      }
    );

    type isEmployeeFilterT = 'all'|'employee'|'non'|'';
    this.filterService.register('isEmployee', (value:number, filter:isEmployeeFilterT): boolean => {
      console.log('isEmployee', {value}, {filter});
      filter = ( (filter || '').trim().toLowerCase() ) as isEmployeeFilterT;
      if( filter === '') return true;
      if( isNaN(value * 1) ) return false;

      if(filter === 'employee') {
        return value < 900_000_000;
      } else if(filter === 'non') {
        return value >= 900_000_000;
      } else {
        return true;
      }
    });
  }
  private _initTable() {
    this.tableDef = {
      "dataKey": "node_id",
      "cols": [
        {header:"Name", field:"name", sortable:"true", resizeable:"", type:"string"},
        {header:"Description", field:"description", sortable:"", resizeable:"true", type:"string"},
        {header:"Language(s)", field:"language", sortable:"", resizeable:"", type:"string"},
        {header:"Created", field:"created_at", sortable:"", resizeable:"", type:"date"},
        {header:"Project Size", field:"size", sortable:"", resizeable:"", type:"number"},
        {header:"Private", field:"private", sortable:"", resizeable:"", type:"string"},
      ]
    };
  }
}
