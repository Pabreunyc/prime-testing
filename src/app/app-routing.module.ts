import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; // exported by BrowerModule in app.module
import { RouterModule, Routes } from '@angular/router';
import { ContextTestComponent } from './forms/context-test/context-test.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { MenunavComponent } from './menunav/menunav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Tables1Component } from './tables1/tables1.component';
import { TemplatesDemoComponent } from './templates-demo/templates-demo.component';

export const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'cp', loadChildren: () => import('./child-parent/child-parent.module').then(m => m.ChildParentModule) },
  { path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path:'forms', component:FormsComponent }, { path: 'forms-context', component:ContextTestComponent },
  { path:'menu', component:MenunavComponent },
  { path:'tables', component:Tables1Component },
  { path:'templates', component:TemplatesDemoComponent },
  { path:'404', component:NotfoundComponent },
  { path:'**', component:NotfoundComponent }
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
