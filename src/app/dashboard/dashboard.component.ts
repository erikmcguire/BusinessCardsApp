import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Card } from '../card.model';
import { Observable } from 'rxjs';
import { config } from '../app.config';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageService } from '../image.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: Observable<any[]>;
  public addToggle = false;
  constructor(private appService: AppService,
              private authService: AuthService,
              private afs: AngularFirestore,
              private imgService: ImageService) {
        }

  toggleAdd() {
      this.addToggle = !this.addToggle;
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




}
