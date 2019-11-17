import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ImageService } from '../image.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Card } from '../card.model';

@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewbusinesscardComponent implements OnInit {
    card: any;

    constructor(private appService: AppService,
                private imgService: ImageService,
                private authService: AuthService,
                private router: Router) {
    }

    addCard(firstName: HTMLInputElement, lastName: HTMLInputElement,
            organization: HTMLInputElement, position: HTMLInputElement,
            email: HTMLInputElement,
            phone: HTMLInputElement,
            address: HTMLInputElement): boolean {
      let businessCard = {
                          firstName: firstName.value,
                          lastName: lastName.value,
                          organization: organization.value,
                          position: position.value,
                          email: email.value,
                          phone: phone.value,
                          address: address.value,
                          author: this.authService.afAuth.auth.currentUser.uid,
                          addedAt: Date.now(),
                          imageUri: this.imgService.filledCard.imageUri || ""
                      };
      this.card = businessCard;
      this.appService.addCard(businessCard);
      this.router.navigate(['/card']);
      return false;
      }

    clearForm() {
       this.imgService.filledCard = new Card();
       this.imgService.base64 = null;
       return false;
      }

    ngOnInit() {

    }


}
