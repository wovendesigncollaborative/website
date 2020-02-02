import { Injectable } from '@angular/core';
import { Project, PROJECTS } from '../data/projects';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjectById(id: string) {
    return PROJECTS.find(project => project.id === id);
  }

  getProjects(): Project[] {
    return PROJECTS;
  }
}
