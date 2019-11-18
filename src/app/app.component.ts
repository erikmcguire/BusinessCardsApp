import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { MatDialog } from  '@angular/material';
import { LoginComponent } from './login/login.component';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'business-cards-app';

  constructor(public dialog: MatDialog) {
        gtag('config', environment.firebase.measurementId);
  }

  prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

    openLogin() {
        this.dialog.open(LoginComponent,
                         { data: {message:  ""
                     }});
    }

    ngOnInit(): void {

    }
}
