import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../data/projects';
import { ProjectService } from '../../services/project.service';
import { SlideshowDialogComponent } from '../slideshow-dialog/slideshow-dialog.component';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {


  project: Project | undefined;


  get slides() {
    if (this.project) {
      return this.project.slides;
    }
    return []
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    projectService: ProjectService,
    private dialog: MatDialog
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.project = projectService.getProjectById(projectId);
      }


    });


  }

  ngOnInit() {
  }


  launchSlideShow(index) {
    this.dialog.open(SlideshowDialogComponent, {
      width: '80vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: true,
      data: {
        project: this.project,
        slideIndex: index
      }

    });
  }
}


