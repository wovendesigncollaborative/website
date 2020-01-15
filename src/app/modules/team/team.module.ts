import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamComponent } from './team.component';
import { PhotoWithLegendComponent } from './components/photo-with-legend/photo-with-legend.component';

@NgModule({
  declarations: [TeamComponent, PhotoWithLegendComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ]
})
export class TeamModule { }
