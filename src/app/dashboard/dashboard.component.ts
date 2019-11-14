import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../card.model';
import { Observable } from 'rxjs';
import { config } from '../app.config';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageService } from '../image.service';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  cards: Observable<any[]>;
  qsubscription: Subscription;
  public addToggle = false;
  constructor(private authService: AuthService,
              private afs: AngularFirestore,
              private imgService: ImageService) {
        }

  toggleAdd() {
      this.addToggle = !this.addToggle;
  }

  searchCards(t, query): boolean {
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

      this.cards = this.afs
        .collection(config.collection_endpoint, ref => ref.where("author", "==", JSON.parse(this.authService.getUser()).uid))
        .snapshotChanges()
        .pipe(
               map(actions => {
                   return actions.map(a => {
                   const data = a.payload.doc.data() as Card;
                   const id = a.payload.doc.id;
                   return { id, ...data };
               });
          })
        );
  }

  ngOnDestroy() {
      this.qsubscription.unsubscribe();
  }
}
