import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AwardsComponent } from './awards.component';
import { AwardCardComponent } from './components/award-card/award-card.component';

@NgModule({
  declarations: [AwardsComponent, AwardCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class AwardsModule { }
