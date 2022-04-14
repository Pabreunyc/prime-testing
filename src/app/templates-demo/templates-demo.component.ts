import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

import * as categoriesJson from '../../assets/data/categories.json';
import * as productsJson from '../../assets/data/products.json';

@Component({
  selector: 'templates-demo',
  templateUrl: './templates-demo.component.html',
  styleUrls: ['./templates-demo.component.css']
})
export class TemplatesDemoComponent implements OnInit, AfterViewInit {
  //@ViewChild(TemplateRef) "wo_platesTemplate";
  @ViewChild("wo_platesTemplate") wo_platesTemplateRef;

  public categories:any = [];
  public products:SelectItem[] = [];
  public productsAll:any=[];
  
  public displayTemplate:string = '';

  public parentFG:FormGroup = null;

  public XXX = 'wo_platesTemplate';

  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this._init();
  }
  ngAfterViewInit(): void {
    console.log('%cTemplatesDemoComponent', 'background-color:yellow;color:black', this.wo_platesTemplateRef);
  }
  
// ============================================================================
  onSubmit(evt) {
    console.log('onSubmit:', evt);
  }

  selectCategory(evt:SelectItem) {
    let catId = evt.value;
    console.log('selectCategory:', evt);

    this.products = this.productsAll.filter(e => e.ticket_cat_id === catId);
  }
  selectProduct(evt:SelectItem) {
    console.log('selectProduct:', evt);
  }
// ============================================================================
  private _init() {
    this.categories = (categoriesJson as any).default;
    this.productsAll = (productsJson as any).default;
    console.log(this.categories);

    this.parentFG = this.fb.group({
      'fc_username': ['', [Validators.required]],
      'fc_email': ['' ],
    });
  }
}
