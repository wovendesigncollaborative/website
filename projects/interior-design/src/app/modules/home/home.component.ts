import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = ['assets/img/logo.png', 'assets/img/strategic-spatial-planning.jpg', 'assets/img/sustainable-development.jpg']

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
