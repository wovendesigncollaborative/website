import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  image = '/assets/img/cleo.jpg';

  activities = [{
    name: 'cleo',
    url: '/assets/img/cleo.jpg'
  },
  {
    name: 'nisha',
    url: '/assets/img/nisha.jpg'
  }];
  constructor() { }

  ngOnInit() {
  }

}
