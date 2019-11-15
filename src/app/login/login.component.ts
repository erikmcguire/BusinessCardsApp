import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var gtag;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

 login(email: string, password: string) {
      this.authService.login(email, password).then(user => {
          gtag('event', 'login',
               {method: 'Email w/ Pass',
                email: JSON.stringify(user.user.email)})});

  }

  logout(): boolean {
      return this.authService.logout();
  }

  printUser(): string {
      return this.authService.printUser();
  }
  ngOnInit() {

  }

}
