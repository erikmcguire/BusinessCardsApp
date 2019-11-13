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
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewbusinesscardComponent }
         from './newbusinesscard/newbusinesscard.component';
import { BusinesscardComponent }
         from './businesscard/businesscard.component';
import { HttpModule } from '@angular/http';
import { WebcamComponent } from './webcam/webcam.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    NewbusinesscardComponent,
    BusinesscardComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,
                                    'business-cards-app'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    WebcamModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
