import { Component, Input, OnInit } from '@angular/core';
import { Card } from "../card.model";
import { AppService } from '../app.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {
  @Input() card: Card;
  myCard: any = {};
  editMode: boolean = false;
  cardToEdit: any = {};
  saved: boolean = true;
  constructor(private appService: AppService, public dbc: DashboardComponent) { }

  edit(card: Card) {
    this.cardToEdit = card;
    this.editMode = true;
    this.myCard = card;
    this.saved = false;
    this.dbc.addToggle = false;
  }

  getValue(field, ph) {
      if (field.trim()) {
          return field;
      } else return ph;
  }
  saveCard(firstName: HTMLInputElement,
           lastName: HTMLInputElement,
           organization: HTMLInputElement,
           position: HTMLInputElement,
           email: HTMLInputElement,
           phone: HTMLInputElement,
           address: HTMLInputElement): boolean {
     if (this.myCard !== null) {
        let card = this.myCard;
        if (!this.editMode) {
           this.appService.addCard(card);
        } else {
            let card = {
                    firstName: firstName.value || this.myCard.firstName,
                    lastName: lastName.value || this.myCard.lastName,
                    organization: organization.value || this.myCard.organization,
                    position: position.value || this.myCard.position,
                    email: email.value || this.myCard.email,
                    phone: phone.value || this.myCard.phone,
                    address: address.value || this.myCard.address
                        };
           let cardId = this.cardToEdit.id;
           this.appService.updateCard(cardId, card);
        }
        this.editMode = false;
        this.saved = true;
        this.myCard  = "";
     }
     this.dbc.toggleAdd();
     return false;
  }

  deleteCard(card: Card) {
     let cardId = card.id;
     this.appService.deleteCard(cardId);
  }

  ngOnInit() {
  }

}
