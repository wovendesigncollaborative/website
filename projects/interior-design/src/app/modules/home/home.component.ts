import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'assets/img/home/slider-1',
    'assets/img/home/slider-2',
    'assets/img/home/slider-3',
    'assets/img/home/slider-4'
  ];

  constructor() { }

  ngOnInit() {
  }


  swipeTextSlide(index) {

  }
}
