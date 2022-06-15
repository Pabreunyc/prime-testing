import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';

const routes: Routes = [
  { path:'', component:ParentComponent },
  { path:'parent2', component:Parent2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildParentRoutingModule { }

