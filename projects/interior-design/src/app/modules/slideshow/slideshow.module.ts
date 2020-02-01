import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlideshowComponent } from './slideshow.component';



@NgModule({
  declarations: [SlideshowComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SlideshowComponent
  ]
})
export class SlideshowModule { }
