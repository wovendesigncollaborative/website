import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhotoWithLegendComponent } from './components/photo-with-legend/photo-with-legend.component';
import { TeamComponent } from './team.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [TeamComponent, PhotoWithLegendComponent, TeamMemberComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class TeamModule { }
