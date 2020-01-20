import { Component, OnInit } from '@angular/core';
import { FADING_IN, FALL, SHRINK } from './animations/animation';
import { competencies, Competency } from './competencies';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [FALL, SHRINK, FADING_IN],
})
export class WhatWeDoComponent implements OnInit {


  get images() {
    return competencies.map(competency => competency.src);
  }


  public hasClickedOnce = false;
  public fadingIn = false;
  public indexSelected = null;

  public displayedCompetency: Competency = competencies[0];

  constructor() { }

  public ngOnInit() { }

  public onImageClick(index) {
    /* if (!this.hasClickedOnce) {
      this.hasClickedOnce = true;
      setTimeout(() => (this.fadingIn = true), 2000);
    } */

    this.displayedCompetency = competencies[index];
    this.indexSelected = index;
  }
}
