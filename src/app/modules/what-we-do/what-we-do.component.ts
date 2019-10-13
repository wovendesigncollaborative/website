import { Component, OnInit } from '@angular/core';
import { FADING_IN, FALL, SHRINK, SPACING } from './animations/animation';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [
    FALL,
    SHRINK,
    SPACING,
    FADING_IN
  ]
})
export class WhatWeDoComponent implements OnInit {

  imageSrc = 'assets/img/nisha.jpg';

  images = [
    'assets/img/regional-planning.jpg',
    'assets/img/urban-design.jpg',
    'assets/img/rural-development.jpg',
    'assets/img/environmental-planning.jpg',
    'assets/img/social-development.jpg'
  ];

  hasClickedOnce = false;
  fadingIn = false;
  indexSelected = null;

  constructor() { }

  ngOnInit() {

  }

  onImageClick(index) {

    if (!this.hasClickedOnce) {
      this.hasClickedOnce = true;
      setTimeout(() => this.fadingIn = true, 2000);
    }


    this.indexSelected = index;
    this.imageSrc = this.images[index];

  }

}
