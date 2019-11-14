import { Component, OnInit } from '@angular/core';
declare var gtag;
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      gtag('event', 'not_found');
  }

}
