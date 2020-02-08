import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../data/projects';



@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  get src() {
    return this.project.src
  }



  get name() {
    return this.project.name;
  }



  constructor() { }

  ngOnInit() {
  }


}
