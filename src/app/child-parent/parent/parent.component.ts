import { Component, OnDestroy, OnInit } from '@angular/core';
import { deepStrictEqual } from 'assert';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';

export type ChildType = 'child01' | 'child02';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {

  public showCurrentComponent:ChildType = 'child01';
  public data;
  public random:number = 0;

  private subs: Subscription = new Subscription();
  
  constructor(private dataService:DataService) {
    dataService.initBSubject();
  }
  
  ngOnInit(): void {
    console.log('%cParentComponent', 'background-color:green;color:white');
    this.dataService.data$.subscribe( 
      d => { console.log(d); }
    )
  }
  ngOnDestroy(): void {
    console.log('%cParentComponent', 'background-color:red;color:white');
  }

  switchChild() {
    this.showCurrentComponent = this.showCurrentComponent === 'child01' ? 'child02' : 'child01';
  }
  
  updateData(message) {
    this.random = Math.random();
    this.dataService.updateSubject(message);
  }
}
