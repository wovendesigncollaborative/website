import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TeximateModule } from 'ngx-teximate';
import { HomeComponent } from './home.component';
import {Ng2FittextModule} from "ng2-fittext";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SlideshowModule,
    TeximateModule,
    FlexLayoutModule,
    Ng2FittextModule,
  ]
})
export class HomeModule { }
