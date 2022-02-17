import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../_services/data.service';
import { finalize, tap } from 'rxjs/operators';
import { FilterService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-tables1',
  templateUrl: './tables1.component.html',
  styleUrls: ['./tables1.component.css']
})
export class Tables1Component implements OnInit { 
  private _data;
  public data;
  public plateStatusSelect:SelectItem[] = [{value:"wi_plates", label:"Wi. Plates"}, {value:"wo_plates", label:"W/O Plates"}, {value:"", label:"All"}];
  public employeeTypeSelect:SelectItem[] = [{label:'All', value:'all'}, {label:'Employee',value:'employee'}, {label:'Non',value:'non'}];
  public parkingZones = [];
  public loading:Boolean = false;
  public selectedRow = null;


  constructor(
    private ds:DataService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    console.log('%cTables1Component', 'background-color:green;color:white;');
    this._init();

  }
// ============================================================================
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

    parking_zone_id: 6
    parking_zone_name: "Mets Lot"

    this.ds.getList().pipe(
      tap(console.log),
      finalize( () => { this.loading = false;} )
    ).subscribe(
      (resp) => {
        console.log('getList', resp);
        this._data = [...resp.wi_plates, ...resp.wo_plates]; 
        this.data = [...resp.wi_plates, ...resp.wo_plates];
        //parking_zone_id: 6; parking_zone_name: "Mets Lot"
        
        this.parkingZones  = []
        let pz = new Set( this.data.map(e => e.parking_zone_name).sort() )
          .forEach( z => {
            if(typeof z === 'string') this.parkingZones.push({label:z, value:z});
          } );
        console.log(this.parkingZones);
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
}
