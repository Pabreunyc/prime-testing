import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimengModule } from './_shared/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { Tables1Component } from './tables1/tables1.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplatesDemoComponent } from './templates-demo/templates-demo.component';
import { FormsComponent } from './forms/forms.component';
import { ContextTestComponent } from './forms/context-test/context-test.component';
import { MenunavComponent } from './menunav/menunav.component';
import { DetailsViewComponent } from './tables1/details-view/details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    Tables1Component,
    HomeComponent,
    NotfoundComponent,
    TemplatesDemoComponent,
    FormsComponent,
    ContextTestComponent,
    MenunavComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
