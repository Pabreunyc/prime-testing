import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { EmailService } from '../_services/email.service';
//import { routes } from '../app-routing.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public version = VERSION.full;
  public routes = [];

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    console.log('%cHomeComponent', 'background:green; color:white;');
  }
  ngOnDestroy(): void {
    console.log('%cHomeComponent', 'background:red; color:white;');
  }
// ============================================================================
// ============================================================================
  private _init() {
    this.routes = ['cp','admin','helpdesk','forms','forms-context','menu','tables','templates'];
  }
}
