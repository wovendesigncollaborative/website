import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {

  competencies = ['Coffee', 'Cleaning', 'Humor', 'Eating', 'Shouting', 'Complaining'];
  members = [{
    name: 'Paul Dejean',
    role: 'Developer'
  },
  {
    name: 'Chitraa Raj',
    role: 'Chai maker'
  }];

  shehla = {
    legend: ""
  }

  constructor() { }

  ngOnInit() {
  }

}
