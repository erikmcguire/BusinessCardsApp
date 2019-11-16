import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

declare var gtag;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

 login(email: string, password: string) {
      this.authService.login(email, password).then(user => {
          gtag('event', 'login',
               {method: 'Email w/ Pass',
                email: JSON.stringify(user.user.email)})
            this.router.navigate(['/card'])
        });

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
