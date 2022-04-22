import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChild('userForm') userForm: NgForm;
  
  static re = /[^\w\d\.\-\_]/g;
  
  public subs: Subscription = new Subscription();

  public user = {
    firstName: '',
    lastName: '',
    username: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.userForm);

    this.subs.add( this.userForm.valueChanges.subscribe(vc => this._setUsername(vc) ) );
  }
// ----------------------------------------------------------------------------
  onSubmit(form) {
    console.log('onSubmit:', form.form.controls);
  }

  calculateResult(evt) {
    console.log('calculateResult:', this.user);
  }
// ----------------------------------------------------------------------------
  private _setUsername(vc) {
    //console.log(this.userForm.form.controls)
    //console.log({vc});
    
    let {firstName, lastName } = vc;
    firstName = (firstName||'').trim()
    lastName = (lastName || '').trim();

    //this.user['username'] = `${firstName}.${lastName}`.replace(FormsComponent.re, '');
    let username = `${firstName}.${lastName}`.replace(FormsComponent.re, '');
    console.log( {username} );
    if( this.userForm.control.get('username') ) {
      console.log('---> [', this.userForm.control.get('username').value, typeof this.userForm.control.get('username').value );
      //this.userForm.control.get('username').setValue(username);
    }
  }
}
