import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainCarousel} from "./carousel/carousel-component";
import {Carousel} from "./carousel/carousel";
import {Slide} from "./carousel/slider-component";

@NgModule({
  declarations: [
    AppComponent,MainCarousel,Carousel,Slide
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainCarousel]
})
export class AppModule { }
