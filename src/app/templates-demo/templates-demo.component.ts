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
  @ViewChild("defaultTemplate") defaultTemplateRef:TemplateRef<any>;
  @ViewChild("docservicesOptions") docservicesOptionsTemplateRef:TemplateRef<any>;

  public categories:any = [];
  public products:SelectItem[] = [];
  public productsAll:any=[];
  
  public displayCBGOptions:boolean = false;
  public displayDocServiceOptions:boolean = false;
  public displayTemplate:TemplateRef<any> = null;

  public parentFG:FormGroup = null;
  public docservicesFG:FormGroup = null;
  public optsYN:SelectItem[] = [ {value:'no', label:'No'}, {value:'yes', label:'Yes'}];
  public optsYNOther:SelectItem[] = [ {value:'no', label:'No'}, {value:'yes', label:'Yes'}, {value:'other', label:'Other'}];

  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this._init();
    this.displayTemplate = this.defaultTemplateRef;
  }
  ngAfterViewInit(): void {
  }
  
// ============================================================================
  onSubmit(evt) {
    //console.log('onSubmit:', evt);
    console.log('onSubmit:', this.parentFG);
  }

  selectCategory(evt:SelectItem) {
    let catId = evt.value;
    console.log('selectCategory:', evt);

    this.products = this.productsAll.filter(e => e.ticket_cat_id === catId);

    if(catId === 12)
      this.displayTemplate = this.docservicesOptionsTemplateRef;
    else
      this.displayTemplate = this.defaultTemplateRef;
  }
  selectProduct(evt:SelectItem) {
    console.log('selectProduct:', evt);
  }
// ============================================================================
  private _init() {
    this.categories = (categoriesJson as any).default;
    this.productsAll = (productsJson as any).default;
    console.log(this.categories);

    this.docservicesFG = this.fb.group( {
      'fc_dsCBGContractNo': [''],
      'fc_dsIsFullSize': ['', [Validators.required] ],
      'fc_dsIsDoubleSided': [''],
      'fc_dsIsBound': ['', ],
      'fc_dsIsStapled': [''],
      'fc_dsIsColorScan': ['', ],
      'fc_dsNumCopies': [1, Validators.min(1)]
    });

    this.parentFG = this.fb.group({
      'fc_username': ['', [Validators.required]],
      'fc_email': ['' ],
      'docservices': this.docservicesFG
    });
  }
}
