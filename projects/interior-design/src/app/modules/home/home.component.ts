import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = ['assets/img/slider-1.png',
    'assets/img/slider-2.png',
    'assets/img/slider-3.png',
    'assets/img/slider-4.png',
    'assets/img/slider-a.png',
    'assets/img/slider-b.png',
    'assets/img/slider-c.png',
    'assets/img/slider-d.png'
  ];

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
