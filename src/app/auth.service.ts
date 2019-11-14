import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
    asubscription: Subscription;

  constructor(public afAuth: AngularFireAuth) {
      this.asubscription = this.afAuth.authState.subscribe(user => {
        if (user)
          {     
            localStorage.setItem('user', JSON.stringify(user));
          }
      }) }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    return false;
  }

  getUser(): any {
      return localStorage.getItem('user');
  }

  printUser(): string {
      return JSON.parse(this.getUser()).email;
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
}
  ngOnDestroy() {
      this.asubscription.unsubscribe();
  }
}
