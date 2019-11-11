import { Injectable } from '@angular/core';
import { Card } from "./card.model";
import { config } from './app.config';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  tasks: AngularFirestoreCollection<Card>;
  private cardDoc: AngularFirestoreDocument<Card>;
  constructor(private db: AngularFirestore) { }

  deleteCard(id: string) {
     this.cardDoc = this.db.doc<Card>(`${config.collection_endpoint}/${id}`);
     this.cardDoc.delete();
  } 
}
