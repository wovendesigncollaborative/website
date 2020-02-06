import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'assets/img/home/slider-1.webp',
    'assets/img/home/slider-2.webp',
    'assets/img/home/slider-3.webp',
    'assets/img/home/slider-4.webp'
  ];

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
