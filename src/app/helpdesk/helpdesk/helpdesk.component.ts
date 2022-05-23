import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelpdeskService } from 'src/app/_services/helpdesk.service';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit, OnDestroy {

  constructor(
    private helpdeskServices: HelpdeskService
  ) { }

  ngOnInit(): void {
    console.log('%cHelpdeskComponent','background-color:green;color:white');
    this.helpdeskServices.getTickets().subscribe(
      tickets => console.log(tickets)
    )
  }
  ngOnDestroy(): void {
    console.log('%cHelpdeskComponent','background-color:red;color:white');
  }
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

}
