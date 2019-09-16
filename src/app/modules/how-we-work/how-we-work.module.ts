import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { HowWeWorkComponent } from './how-we-work.component';

@NgModule({
  declarations: [HowWeWorkComponent, FlipCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class HowWeWorkModule { }
