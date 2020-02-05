import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'assets/img/home/slider-1.jpg',
    'assets/img/home/slider-2.jpg',
    'assets/img/home/slider-3.jpg',
    'assets/img/home/slider-4.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
