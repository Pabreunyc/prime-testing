import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {path:'', component:DashboardHomeComponent},

  {path:'design', component:DesignComponent},

  {path:'datachart', component:DataChartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
