import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';

@NgModule({
  declarations: [ComingSoonPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    ComingSoonPageComponent
  ]
})
export class ComingSoonModule { }
