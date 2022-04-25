import { Component, OnInit, VERSION } from '@angular/core';
//import { routes } from '../app-routing.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public version = VERSION.full;
  public routes = [];

  constructor() { }

  ngOnInit(): void {    
  }
// ============================================================================
// ============================================================================
  private _init() {

  }
}
