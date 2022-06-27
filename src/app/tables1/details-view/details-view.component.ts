import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  @Input() data;
  @Input() inData;

  constructor() { }

  ngOnInit(): void {
    console.log('data:', this.data);
    console.log('inData:', this.inData);
  }

}
