import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'assets/img/slider-1.png',
    'assets/img/slider-2.png',
    'assets/img/slider-3.png',
    'assets/img/slider-4.png'
  ];

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
