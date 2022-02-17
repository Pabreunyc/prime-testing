import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { __metadata } from 'tslib';

// get list of random ints: 1-6
// https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _dataStore = [];
  private _data:BehaviorSubject<any> = new BehaviorSubject(this._dataStore);
  public data$:Observable<any> = this._data.asObservable();

  private _messageSource = new BehaviorSubject('');
  public currentMessage$ = this._messageSource.asObservable();
  
  constructor(private http: HttpClient) { 
  }

  public loadFakeData(num = 50) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  
  public getList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
    return this.http.get('http://localhost:8080/cars/cart/paul.abreu');
  }

  public initBSubject():void {
    this._data.next(this._dataStore);
  }
  public getSubject() {
    return this._data.value;
  }
  public updateSubject(message) {
    this._dataStore.push({timeStamp:new Date(), message});
    this._data.next(this._dataStore);
    //return of(this._dataStore);
  }
  public deleteItem(item) {
    let ndx = this._dataStore.findIndex( f => f.timeStamp === item.timeStamp );
    console.log('deleteItem.ndx', ndx);
    this._dataStore.splice(ndx,1);
    this._data.next(this._dataStore);
    return of(this._dataStore);
  }

  /** @deprecated use foo2 in all cases */
  public foo1(item) {
    return true;
  }
  public foo2(item) {
    return false;
  }


}
