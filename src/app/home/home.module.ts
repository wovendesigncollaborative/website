import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TeximateModule } from 'ngx-teximate';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SlideshowModule,
    TeximateModule,
  ]
})
export class HomeModule { }
