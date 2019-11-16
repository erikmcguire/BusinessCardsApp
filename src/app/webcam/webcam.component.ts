import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

    video: HTMLVideoElement;
    canvas: HTMLCanvasElement;
    photo: HTMLImageElement;
    toggleCam: boolean = false;

    constructor(private imgService: ImageService) {
    }

    ngOnInit() {
    }

    setImage(imageUri: string): boolean {
        if (imageUri.search("http") != -1) {
            this.imgService.remoteImg = imageUri;
        } else {
            this.imgService.localImg = imageUri;
        }
        return false;
    }
    toggleCamera() {
        if (!this.toggleCam) {
            this.toggleCam = true;
            this.video = document.querySelector('video');
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(
                    (stream) => {
                        this.video.srcObject = stream},
                        err => { console.log(err) });
            }
        } else if (this.toggleCam) {
            this.toggleCam = false;
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({video: true})
                .then(stream => {
                      stream.getTracks()[0].stop();
                     },
                    err => { console.log(err) });
            }
        }
    }

    snap() {
        this.canvas = document.querySelector('canvas');
        this.canvas.getContext('2d').drawImage(this.video, 0, 0, 640, 480);
        this.photo = document.createElement('img');
        this.photo.setAttribute('src', this.canvas.toDataURL('image/png'));
        this.imgService.scanCard(this.photo.src);
    }

}
