import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './projects.component';




@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ProjectsModule { }
