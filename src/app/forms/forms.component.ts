import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';

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
    username: '',
    email: ''
  };
  
  public myForm:FormGroup;

  get first_name() {
    return this.myForm.get('first_name').value;
  } 
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('%cFormsComponent', 'color:green');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cFormsComponent', 'color:red');
    this.subs.unsubscribe();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.userForm);

    //this.subs.add( this.userForm.valueChanges.subscribe(vc => this._setUsername(vc) ) );
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
// ----------------------------------------------------------------------------
  private _init() {
    this.myForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: [''],
      email: ['']
    });

    const valueChangesFirstName = this.myForm.get('first_name').valueChanges;
    const valueChangesLastName = this.myForm.get('last_name').valueChanges;
    
    this.subs.add(
      combineLatest([valueChangesFirstName, valueChangesLastName])
        .subscribe(v => {
          //console.log('CL:', v);
          this.myForm.get('email').patchValue(v[0] + v[1] + '@host.com');
        })
    );
  }
}
