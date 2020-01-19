import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowComponent } from './slideshow.component';



@NgModule({
  declarations: [SlideshowComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    SlideshowComponent
  ]
})
export class SlideshowModule { }
