import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../_shared/primeng.module';

import { ChildParentRoutingModule } from './child-parent-routing.module';
import { ParentComponent } from './parent/parent.component';
import { Child01Component } from './child01/child01.component';
import { Child02Component } from './child02/child02.component';
import { Child03Component } from './child03/child03.component';
import { Parent2Component } from './parent2/parent2.component';


@NgModule({
  declarations: [
    ParentComponent,
    Child01Component,
    Child02Component,
    Child03Component,
    Parent2Component
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ChildParentRoutingModule
  ]
})
export class ChildParentModule { }
