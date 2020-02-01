import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideshowModule } from '../slideshow/slideshow.module';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { SlideshowDialogComponent } from './components/slideshow-dialog/slideshow-dialog.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectDetailComponent, SlideshowDialogComponent],
  entryComponents: [SlideshowDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProjectsRoutingModule,
    SlideshowModule,
    MatDialogModule,
    FontAwesomeModule,
  ],
})
export class ProjectsModule { }
