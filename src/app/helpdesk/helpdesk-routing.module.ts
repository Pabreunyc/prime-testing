import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';

const routes: Routes = [
  { path:'', redirectTo: 'helpdesk', pathMatch:'full'},
  { path:'helpdesk', component: HelpdeskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { 
}
