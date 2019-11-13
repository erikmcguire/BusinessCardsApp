import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Card } from '../card.model';
import { Observable } from 'rxjs';
import { config } from '../app.config';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: Observable<any[]>;
  private addToggle = false;
  constructor(private appService: AppService, private afs: AngularFirestore,
              private imgService: ImageService) { }

  toggleAdd() {
      this.addToggle = !this.addToggle;
  }
  ngOnInit() {
      this.cards = this.afs
        .collection(config.collection_endpoint)
        .snapshotChanges()
        .pipe(
               map(actions => {
                   return actions.map(a => {

                   //Get document data
                   const data = a.payload.doc.data() as Card;

                   //Get document id
                   const id = a.payload.doc.id;

                   //Use spread operator to add the id to the document data
                   return { id, ...data };
               });
          })
        );
  }




}
