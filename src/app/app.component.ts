import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'business-cards-app';
  constructor() {
        gtag('config', environment.firebase.measurementId);
  }

  prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

  public ngOnInit(): void {
  }
}
