import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; // exported by BrowerModule in app.module
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Tables1Component } from './tables1/tables1.component';
import { TemplatesDemoComponent } from './templates-demo/templates-demo.component';

const routes:Routes = [
  { path:'', component:HomeComponent },
  { path:'tables', component:Tables1Component },
  { path:'cp', loadChildren: () => import('./child-parent/child-parent.module').then(m => m.ChildParentModule) },
  { path:'templates', component:TemplatesDemoComponent },
  
  { path:'404', component:NotfoundComponent },
  { path:'**', component:NotfoundComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
