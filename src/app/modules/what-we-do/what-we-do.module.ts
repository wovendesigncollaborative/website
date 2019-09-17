import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhatWeDoComponent } from './what-we-do.component';
import { ExpansionCardComponent } from './components/expansion-card/expansion-card.component';

@NgModule({
  declarations: [WhatWeDoComponent, ExpansionCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class WhatWeDoModule { }
