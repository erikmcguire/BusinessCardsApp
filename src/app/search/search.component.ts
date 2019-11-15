import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { config } from '../app.config';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

declare var gtag;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
    cards: Observable<any[]>;
    qsubscription: Subscription;
  constructor(private authService: AuthService,
              private afs: AngularFirestore) { }

    searchCards(t, query): boolean {
        gtag("event", "search", {search_term: query})
        const queryObservable = this.afs.collection(
                              config.collection_endpoint,
                              ref => ref.where("author", "==",
                                  JSON.parse(this.authService.getUser()).uid)
                                  .where(t, '==', query)).valueChanges();

       this.qsubscription = queryObservable.subscribe((q: any) => {
         if (t == 'firstName' && q[0]) {
         console.log(q[0].firstName);
     } else if (t == 'organization' && q[0]) {
         console.log(q[0].organization);
     }
       });
      return false;
   }
  ngOnInit() {
  }
  ngOnDestroy() {
      if (this.qsubscription) {
          this.qsubscription.unsubscribe();
      }
  }
}
