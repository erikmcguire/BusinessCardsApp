import { Component, Input, OnInit } from '@angular/core';
import { Card } from "../card.model";
import { AppService } from '../app.service';

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
  constructor(private appService: AppService) { }

  edit(card) {
    this.cardToEdit = card;
    this.editMode = true;
    this.myCard = card;
    this.saved = false;
  }

  saveCard(): boolean {
     if (this.myCard !== null) {
        let card = this.myCard;
        if (!this.editMode) {
           this.appService.addCard(card);
        } else {
           let cardId = this.cardToEdit.id;
           this.appService.updateCard(cardId, card);
        }
        this.editMode = false;
        this.saved = true;
        this.myCard  = "";
     }
     return false;
  }

  deleteCard(card) {
     let cardId = card.id;
     this.appService.deleteCard(cardId);
  }

  ngOnInit() {
  }

}
