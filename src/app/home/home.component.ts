import { Component, OnInit, VERSION } from '@angular/core';
import { AppRoutingModule,routes } from '../app-routing.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  version = VERSION.full;

  constructor() { }

  ngOnInit(): void {
    console.log('AppRoutingModule:', AppRoutingModule);
    console.log('AppRoutingModule:', routes);
  }

}
