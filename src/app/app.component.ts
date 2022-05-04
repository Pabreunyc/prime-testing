import { Component, HostListener, VERSION } from '@angular/core';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public getScreenWidth=0;
  public getScreenHeight=0;
  
  constructor() {

  }
  //title = 'prime-testing';
  public title = environment.appTitle;
  public version = VERSION.full;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    /*
    console.log( `RESIZE: ${this.getScreenWidth} x ${this.getScreenHeight}` );
    console.log( `AvailWidth: ${window.screen.availWidth}`);
    console.log( `DPI: ${window.devicePixelRatio}`);
    */
    //console.log( `SCREEN: ${window.screen}`);

  }
}
