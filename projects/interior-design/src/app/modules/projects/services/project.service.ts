import { Injectable } from '@angular/core';
import { Project, PROJECTS } from '../data/projects';



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjectById(id: string) {
    const numId = parseInt(id, 10);
    return PROJECTS[numId - 1];
  }

  getProjects(): Project[] {
    return PROJECTS;
  }
}
