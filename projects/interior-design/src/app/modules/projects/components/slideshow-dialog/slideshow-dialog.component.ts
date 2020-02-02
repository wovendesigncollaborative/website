import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'slideshow-dialog',
  templateUrl: './slideshow-dialog.component.html',
  styleUrls: ['./slideshow-dialog.component.scss']
})
export class SlideshowDialogComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.slideshow)
    this.slideshow.selectSlide(this.slideIndex)
  }

  slides: string[];
  @ViewChild('slideshow', { static: false }) slideshow;
  slideIndex: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.slides = data.project.slides;
    this.slideIndex = this.data.slideIndex;
  }

  ngOnInit() {
  }

  onClick() {
    console.log('click')
  }


}
