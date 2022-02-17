import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.css']
})
export class Child03Component implements OnInit, OnDestroy {
  private subs:Subscription = new Subscription();
  public data = [];

  constructor(
    private ds:DataService
  ) { }
  
  ngOnInit(): void {
    this.subs.add( 
      this.ds.data$.subscribe(d => this.data = d)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
// ----------------------------------------------------------------------------
showCartDialog() {
  console.log('this.showCartDialog');
}

}
