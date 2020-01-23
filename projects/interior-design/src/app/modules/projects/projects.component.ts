import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  slides = [
    'assets/img/slider-1.png',
    'assets/img/slider-2.png',
    'assets/img/slider-3.png',
    'assets/img/slider-4.png',
    'assets/img/slider-1.png',
    'assets/img/slider-2.png',
    'assets/img/slider-3.png',
    'assets/img/slider-4.png',
    'assets/img/slider-1.png',
    'assets/img/slider-2.png',
    'assets/img/slider-3.png',
    'assets/img/slider-4.png',
  ];

  constructor() { }

  ngOnInit() {
  }

}
