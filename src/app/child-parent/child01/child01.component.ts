import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component implements OnInit, OnDestroy {
  private subscriptions:Subscription = new Subscription();
  public data;

  constructor(private ds:DataService) { }
  
  ngOnInit(): void {
    console.log('%cChild01Component', 'background-color:green;color:white');
    this.ds.data$.subscribe(
      d => this.data = d
    );

    this.ds.foo1(100);
  }
    
  ngOnDestroy(): void {
    console.log('%cChild01Component', 'background-color:red;color:white');
    this.subscriptions.unsubscribe();
  }
}