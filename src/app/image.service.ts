import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import domtoimage from 'dom-to-image';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnDestroy {
    localImg = 'assets/images/bateman.png';
    remoteImg = 'https://i.pinimg.com/originals/26/b6/84/26b684bb28d44c7da4d83596ebd424a6.png';
    base64: string;
    saveb: boolean = false;
    saves: boolean = false;
    hsubscription: Subscription;
    esubscription: Subscription;
    filledCard: Card = new Card();
  constructor(public http: Http, private authService: AuthService,
              private appService: AppService,
              private router: Router) { }

  convertToBase64() {
     const imgNode = document.getElementById(`image`);
     domtoimage.toPng(imgNode)
                     .then( (dataUrl: string) => {
                             if (this.saveb) {
                                this.saveImg(dataUrl, 'b');
                             }
                             this.base64 = dataUrl;
                      }).catch( (e: any) => {
                                 console.log(e);
                            });
   }

    saveImg(dataUrl, t) {
        this.toggleSave(t);
        let link = document.createElement('a');
        link.download = `snapshot${new Date()
                                   .getTime()}.png`;
        link.href = dataUrl;
        link.click();
    }

  toggleSave(t) {
      if (t === 'b') {
        this.saveb = !this.saveb;
    } else if (t === 's') {
        this.saves = !this.saves;
    }
  }

  displayCardImg(card: Card) {
      if (card.imageUri) {
          return card.imageUri;
      } else return "";
  }

  scanCard(image64?: string, t?: string) {
      if (this.saves && !this.base64 && image64) {
         this.saveImg(image64, t);
      }
      if (!this.base64 && image64 == 's') {
          const request: any = {
              'requests': [
                  {'image': {
                    'source': {'imageUri': this.remoteImg}
                  },
              'features': [{ 'type': 'TEXT_DETECTION', 'maxResults': 1 }]
                  }
               ]};
        const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + environment.cloudVision;
        this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
            this.getEntities(results.json().responses[0].fullTextAnnotation.text);
        });
    } else if (image64 && image64.length >= 2) {
            const request: any = {
                    'requests': [{
                        'image': {
                            'content': image64.replace(/.*base64\,/, "")},
          'features': [{ 'type': 'TEXT_DETECTION', 'maxResults': 1 }]}]};
          const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + environment.cloudVision;
          this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
                this.getEntities(results.json().responses[0].fullTextAnnotation.text);
                });
    } else { const request: any = {
                'requests': [{
                    'image': {
                        'content': this.base64.replace(/.*base64\,/, "")},
      'features': [{ 'type': 'TEXT_DETECTION', 'maxResults': 1 }]}]};
      const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + environment.cloudVision;
      this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
            this.getEntities(results.json().responses[0].fullTextAnnotation.text);
            });
      }
  }

  getEntities(text: string) {
      const url = 'https://language.googleapis.com/v1/documents:analyzeEntities?key=' + environment.cloudVision;
      const request: any = {
             "encodingType": "UTF8",
             "document":
             {
             "type": "PLAIN_TEXT",
             "content": text
             }
         }
      this.esubscription = this.http.post(url, request).subscribe( (results: any) => {
            this.fillEnts(results.json().entities);
            });

  }


  fillEnts(ents: any) {
    let businessCard: any = {};

    businessCard.author = this.authService.afAuth.auth.currentUser.uid;
    businessCard.addedAt = Date.now();
    businessCard.imageUri = this.base64 || this.remoteImg;
    ents.forEach(el => {if (el.type === "PERSON")
                            { businessCard.firstName = el.name.split(" ")[0];
                              businessCard.lastName = el.name.split(" ")[1]
                          }
                    else if (el.type === "ORGANIZATION") {
                        businessCard.organization = el.name;
                    } else if (el.type === "PHONE_NUMBER") {
                        businessCard.phone = el.name;
                    }
                    else if (el.type === "LOCATION" && el.name.search(/[0-9]/) != -1 || el.type === "ADDRESS") {
                        businessCard.address = el.name;
                    } else if (el.type.search("@") != -1) {
                        businessCard.email = el.name;
                    }
                });
    this.filledCard = businessCard;
    this.router.navigate(['/add-card']);
  }

  ngOnDestroy() {
      this.esubscription.unsubscribe();
      this.hsubscription.unsubscribe();
  }
}
