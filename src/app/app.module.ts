import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from 'node_modules/@angular/core';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewbusinesscardComponent }
         from './newbusinesscard/newbusinesscard.component';
import { BusinesscardComponent }
         from './businesscard/businesscard.component';
import { HttpModule } from '@angular/http';
import { WebcamComponent } from './webcam/webcam.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatCardModule,
         MatInputModule, MatIconModule,
         MatDialogModule,
         MatRadioModule, MatTabsModule,
         MatListModule, MatButtonModule, MatExpansionModule, MatDialogRef, MAT_DIALOG_DATA } from  '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { ReversePipe } from './businesscard/reverseCards.pipe';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    LandingComponent,
    LoginComponent,
    NotFoundComponent,
    NewbusinesscardComponent,
    BusinesscardComponent,
    WebcamComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,
                                    'business-cards-app'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebcamModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReversePipe,   { provide: MAT_DIALOG_DATA, useValue: {} },   {
       provide: MatDialogRef,
       useValue: {}
     }],
  bootstrap: [AppComponent]
})
export class AppModule { }
