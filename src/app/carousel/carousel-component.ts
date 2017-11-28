

import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'carousel.html',
  styleUrls: ['./carousel.scss']
})
    export class MainCarousel  {
  //The time to show the next photo
  private NextPhotoInterval:number = 3000;
  //Looping or not
  private noLoopSlides:boolean = false;
  //Photos
  private slides:Array<any> = [];

  constructor() {
    this.addNewSlide();
  }

  private addNewSlide() {
    this.slides.push(
      {image:'./assets/images/HTML5-3D-logo.jpg',text:'Including related links, information, and terms.'},
      {image:'./assets/images/rsz_ionic-3.jpg',text:'Complete open-source SDK for hybrid mobile app development.'},
      {image:'./assets/images/rsz_289230_1056_16.jpg',text:'Angular is a framework for building client applications'},
      {image:'./assets/images/rsz_05-nodejs-logo.jpg',text:'Development platform for executing JavaScript code server-side'},
      {image:'./assets/images/rsz_featuredimage-v2.jpg',text:'Manages computer hardware and software resources '},
      {image:'./assets/images/rsz_mongodb.jpg',text:'MongoDB uses a document-oriented data model.'},
      {image:'./assets/images/rsz_1-4fac83467069c.png',text:'Script language and interpreter that is freely available .'},
      {image:'./assets/images/rsz_goekybe.jpg',text:'A cross-platform, object-oriented scripting language'}
    );
  }

  private removeLastSlide() {
    this.slides.pop();
  }
}
