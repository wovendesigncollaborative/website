import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhoWeAreComponent } from './who-we-are.component';
@NgModule({
  declarations: [WhoWeAreComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class WhoWeAreModule { }
