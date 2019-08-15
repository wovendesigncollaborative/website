import { Component, OnInit, ViewChild } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import {  bounceInRight } from 'ng-animate';


const slides = ['assets/img/cute-cat-1.jpg', 'assets/img/cute-cat-2.jpg', 'assets/img/cute-cat-3.jpg',
'assets/img/cleo.jpg',
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = slides;
  text = 'Lorem ipsum dolor sit amet.';

  enterAnimation: TextAnimation = {
    animation: bounceInRight,
    delay: 500,
    type: 'paragraph'
  };

  constructor() {
   }


  @ViewChild('textSlideshow',  {static: false}) textSlideShow

  ngOnInit() {
  }

  swipeTextSlide(index){
    this.text = "cute cat :" + index
  }
}
