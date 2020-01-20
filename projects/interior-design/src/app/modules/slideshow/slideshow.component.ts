import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';



@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0.3s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]


})
export class SlideshowComponent implements OnInit, OnDestroy {

  slideIndex = 0;

  @Input() autoPlay = false;
  @Input() autoPlayInterval = 2000;
  @Input() showArrows: Boolean = true;
  @Input() showDots: Boolean = false;
  @Input() height = '400px';
  @Input() width = '100%';
  @Input() slides: string[] = [];

  slidePlayer;

  constructor() { }

  ngOnInit() {
    if (this.autoPlay) {
      this.slidePlayer = this.launchAutoPlay();
    }
    this.preloadImages();
  }

  ngOnDestroy() {
    if (this.slidePlayer) {
      clearInterval(this.slidePlayer);
    }
  }

  launchAutoPlay() {
    return setInterval(() => this.nextSlide(), this.autoPlayInterval);
  }


  nextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex += 1;
    } else {
      this.slideIndex = 0;
    }
  }

  previousSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex -= 1;
    } else {
      this.slideIndex = this.slides.length - 1;
    }
  }
  selectSlide(index: number) {
    this.slideIndex = index;
  }

  isDisplayed(index) {
    return index === this.slideIndex;
  }

  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide;
    });
  }


}
