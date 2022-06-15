import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../_shared/primeng.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataChartComponent } from './data-chart/data-chart.component';
import { ChildChartComponent } from './data-chart/child-chart/child-chart.component';
import { ChildTableComponent } from './data-chart/child-table/child-table.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    DataChartComponent,
    ChildChartComponent,
    ChildTableComponent,
    DashboardHomeComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
  ]
})
export class DashboardModule { }
