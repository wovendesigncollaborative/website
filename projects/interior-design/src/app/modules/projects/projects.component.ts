import { Component, OnInit } from '@angular/core';
import { Project } from './data/projects';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];


  constructor(projectService: ProjectService) {
    this.projects = projectService.getProjects();
  }

  ngOnInit() {
  }

}
