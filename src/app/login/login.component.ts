import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

declare var gtag;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  g: boolean = false;
  ep: boolean = false;
  ltypes: string[] = ['Google', 'Email w/ Pass'];
  t: string = "";
  placeholder = "Email w/ Pass";
  constructor(public authService: AuthService,
              private ngZone: NgZone,
              private router: Router) { }

 login(email: HTMLInputElement, password: HTMLInputElement) {
     let emailv = email.value || "";
     let passwordv = password.value || "";
     if (!this.t) {
         this.t = "ep";
     }
     if (this.g) { this.t = "google"}
     else if (this.ep) { this.t = "ep"}

     this.authService.login(this.t, emailv, passwordv).then(user => {
          if (this.t == "ep") {
              gtag('event', 'login',
               {method: 'Email w/ Pass',
                email: JSON.stringify(user.user.email)})
            } else if (this.t == "google") {
                gtag('event', 'login',
                     {method: 'Google',
                      email: JSON.stringify(user.user.email)})
                  }
            this.ngZone.run(() => this.router.navigate(['/card']));
        });
  }

  toggleGoogle(t) {
      if (t === 'Google') {
        this.g = true;
        this.ep = false;
    } else if (t === 'Email w/ Pass') {
        this.ep = true
        this.g = false;
    }
  }

  changePH(t) {
      this.placeholder = t;
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
