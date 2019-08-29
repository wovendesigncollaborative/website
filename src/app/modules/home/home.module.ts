import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AngularFittextModule} from 'angular-fittext';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TeximateModule } from 'ngx-teximate';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SlideshowModule,
    TeximateModule,
    FlexLayoutModule,
    AngularFittextModule,
  ]
})
export class HomeModule { }
