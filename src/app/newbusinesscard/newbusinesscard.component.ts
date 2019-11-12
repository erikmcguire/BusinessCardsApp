import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewbusinesscardComponent implements OnInit {
    card: any;
    constructor(private appService: AppService) {
    }

    addCard(firstName: HTMLInputElement, lastName: HTMLInputElement,
            organization: HTMLInputElement, email: HTMLInputElement,
            phone: HTMLInputElement): boolean {
      let businessCard = {
                          firstName: firstName.value,
                          lastName: lastName.value,
                          organization: organization.value,
                          email: email.value,
                          phone: phone.value
                      };
      this.card = businessCard;
      this.appService.addCard(businessCard);
      return false;
      }

    ngOnInit() {
    }

}
