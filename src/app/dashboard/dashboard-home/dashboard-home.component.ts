import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {

  constructor(
    private ds:DataService
  ) { }

  ngOnInit(): void {
    console.log('%cDashboardHomeComponent', 'background-color:green;color:white;')
  }
  ngOnDestroy(): void {
    console.log('%cDashboardHomeComponent', 'background-color:red;color:white;')
  }
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
  private _init() {
    
  }

}
