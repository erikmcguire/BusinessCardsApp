import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Card } from "./card.model";
import { config } from './app.config';
import { AngularFirestoreCollection,
         AngularFirestoreDocument,
         AngularFirestore }
       from '@angular/fire/firestore';
import { BusinesscardComponent }
       from './businesscard/businesscard.component';
import { Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AppService implements OnInit, OnDestroy {
  cards: AngularFirestoreCollection<Card>;
  businessCard: BusinesscardComponent;
  private cardDoc: AngularFirestoreDocument<Card>;
  qsubscription: Subscription;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
      this.cards = this.afs.collection<Card>(config.collection_endpoint);
  }

  addCard(card: any) {
     this.cards.add(card);
  }

  searchCards(t, query) {
      const q$ = new Subject<string>();
      const queryObservable = q$.pipe(
       switchMap(q =>
         this.afs.collection(config.collection_endpoint, ref => ref.where("author", "==", JSON.parse(this.authService.getUser()).uid).where(t, '==', q)).valueChanges()
       )
     );

     this.qsubscription = queryObservable.subscribe((queriedItems: any) => {
       if (t == 'firstName' && queriedItems[0]) {
       console.log(queriedItems[0].firstName);
   } else if (t == 'organization' && queriedItems[0]) {
       console.log(queriedItems[0].organization);
   }
     });


     q$.next(query);
}
  updateCard(id: string, card) {
       this.cardDoc = this.afs.doc<Card>(`${config.collection_endpoint}/${id}`);
       this.cardDoc.update(card);
    }

  deleteCard(id: string) {
     this.cardDoc = this.afs.doc<Card>(`${config.collection_endpoint}/${id}`);
     this.cardDoc.delete();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
      this.qsubscription.unsubscribe();
  }
}
