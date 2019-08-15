import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeAreComponent } from './who-we-are.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [WhoWeAreComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class WhoWeAreModule { }
