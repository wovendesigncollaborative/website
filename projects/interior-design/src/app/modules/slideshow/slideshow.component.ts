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
        animate('1s', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
    trigger(
      "blockInitialRenderAnimation",
      [
        transition(":enter", [])
      ]
    )
  ]


})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() slideIndex: number = 0;
  @Input() autoPlay = true;
  @Input() autoPlayInterval = 5000;
  @Input() showArrows: boolean = false;
  @Input() showDots: boolean = false;
  @Input() height = '400px';
  @Input() width = '100%';
  @Input() slides: string[] = [];
  @Input() objectFit: string = 'cover';

  slidePlayer;

  constructor() { }

  ngOnInit() {
    if (this.autoPlay) {
      this.slidePlayer = this.launchAutoPlay();
    }
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

}
