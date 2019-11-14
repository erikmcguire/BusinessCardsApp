import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import domtoimage from 'dom-to-image';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnDestroy {
    localImg = 'assets/images/bateman.png';
    remoteImg = 'https://i.pinimg.com/originals/26/b6/84/26b684bb28d44c7da4d83596ebd424a6.png';
    base64: string;
    save: boolean = false;
    hsubscription: Subscription;

  constructor(public http: Http) { }
  convertToBase64() {
     const imgNode = document.getElementById(`image`);
     domtoimage.toPng(imgNode)
                     .then( (dataUrl: string) => {
                             if (this.save) {
                                this.saveImg(dataUrl);
                             }
                             this.base64 = dataUrl;
                      }).catch( (e: any) => {
                                 console.log(e);
                            });
   }

    saveImg(dataUrl) {
        this.toggleSave();
        let link = document.createElement('a');
        link.download = `snapshot${new Date()
                                   .getTime()}.png`;
        link.href = dataUrl;
        link.click();
    }

  toggleSave() {
      this.save = !this.save;
  }
  scanCard(image64?: string) {
      if (this.save && !this.base64 && image64) {
         this.saveImg(image64);
      }
      if (!this.base64 && !image64) {
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
            console.log('Full Text Annotation from Remote');
            console.log(results.json().responses[0].fullTextAnnotation.text);
            this.getEntities(results.json().responses[0].fullTextAnnotation.text);});
        } else if (image64) {
            const request: any = {
                    'requests': [{
                        'image': {
                            'content': image64.replace(/.*base64\,/, "")},
          'features': [{ 'type': 'TEXT_DETECTION', 'maxResults': 1 }]}]};
          const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + environment.cloudVision;
          this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
                console.log('Full Text Annotation from Local: ');
                console.log(results.json().responses[0].fullTextAnnotation.text);
                });
    } else { const request: any = {
                'requests': [{
                    'image': {
                        'content': this.base64.replace(/.*base64\,/, "")},
      'features': [{ 'type': 'TEXT_DETECTION', 'maxResults': 1 }]}]};
      const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + environment.cloudVision;
      this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
            console.log('Full Text Annotation from Local: ');
            console.log(results.json().responses[0].fullTextAnnotation.text);
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
      this.hsubscription = this.http.post(url, request).subscribe( (results: any) => {
            console.log(results.json());
            });
  }

  ngOnDestroy() {
      this.hsubscription.unsubscribe();
  }
}
