import { Injectable, OnInit } from '@angular/core';
import { Card } from "./card.model";
import { config } from './app.config';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AppService implements OnInit {
  cards: AngularFirestoreCollection<Card>;
  businessCard: BusinesscardComponent;
  private cardDoc: AngularFirestoreDocument<Card>;

  constructor(private afs: AngularFirestore) {
      this.cards = this.afs.collection<Card>(config.collection_endpoint);
  }

  addCard(card: any) {
     this.cards.add(card);
  }

  deleteCard(id: string) {
     this.cardDoc = this.afs.doc<Card>(`${config.collection_endpoint}/${id}`);
     this.cardDoc.delete();
  }

  ngOnInit() {
  }
}
