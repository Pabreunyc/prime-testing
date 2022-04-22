import { Component, HostListener, VERSION } from '@angular/core';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public getScreenWidth;
  public getScreenHeight;
  constructor() {

  }
  //title = 'prime-testing';
  title = environment.appTitle;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log( `RESIZE: ${this.getScreenWidth} x ${this.getScreenHeight}` );
    console.log( `AVAIL: ${window.screen.availWidth}`);
    console.log( `DPI: ${window.devicePixelRatio}`);
    console.log( `SCREEN: ${window.screen}`);

  }
}
