import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [trigger("fade", [
    state("void", style({ opacity: 0 })),
    transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]

})
export class SlideshowComponent implements OnInit, OnDestroy {

  slideIndex = 0;

  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 2000;
  @Input() showArrows: Boolean = true;
  @Input() showDots: Boolean = false;
  @Input() height = '400px';
  @Input() width = '100%';
  @Input() slides: string[] = [];

  slidePlayer

  constructor() { }

  ngOnInit() {
    if (this.autoPlay) {
      this.slidePlayer = this.launchAutoPlay()
    }
  }

  ngOnDestroy() {
    if (this.slidePlayer) {
      clearInterval(this.slidePlayer)
    }
  }

  launchAutoPlay() {
    return setInterval(() => this.nextSlide(), this.autoPlayInterval)
  }


  nextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex += 1;
    } else {
      this.slideIndex = 0;
    }
    console.log(this.slideIndex)
  }

  previousSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex -= 1;
    } else {
      this.slideIndex = this.slides.length - 1;
    }
  }
  selectSlide(index: number) {
    this.slideIndex = index
  }

  isDisplayed(index) {
    return index === this.slideIndex
  }

}
