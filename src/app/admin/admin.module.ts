import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmailComponent } from './email/email.component';
import { PrimengModule } from '../_shared/primeng.module';


@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    PrimengModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
