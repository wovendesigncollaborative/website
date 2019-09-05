import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component';
import { HowWeWorkComponent } from './how-we-work.component';

@NgModule({
  declarations: [HowWeWorkComponent, CardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class HowWeWorkModule { }
