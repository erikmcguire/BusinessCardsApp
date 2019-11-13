import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewbusinesscardComponent implements OnInit {
    card: any;
    constructor(private appService: AppService, private imgService: ImageService) {
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
                          address: address.value
                      };
      this.card = businessCard;
      this.appService.addCard(businessCard);
      return false;
      }

    ngOnInit() {
    }
    // this.imgService.getEntities();
}
