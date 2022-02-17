import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component implements OnInit, OnDestroy {
  public subs:Subscription = new Subscription();
  public data = [];

  constructor(private ds:DataService) { }
  
  ngOnInit(): void {
    console.log('%cChild02Component', 'background-color:green;color:white');
    
    this.subs.add( this.ds.data$.subscribe( d => { this.data = d; }) );
  }
  ngOnDestroy(): void {
    console.log('%cChild02Component', 'background-color:red;color:white');
    this.subs.unsubscribe();
  }
// ----------------------------------------------------------------------------
  getData() {
    let d = this.ds.getSubject() as any;
    console.log('>>>>', d);
  }
  deleteItem(item) {
    console.log('deleteItem', item);
    this.ds.deleteItem(item).subscribe(
      d => { console.log('deleted:', d); },
      e => console.error('ERR', e),
      () => console.log('KOMPLETE')
      
    );
  }
}
