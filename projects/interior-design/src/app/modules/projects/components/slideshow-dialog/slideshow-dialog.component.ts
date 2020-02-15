import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'slideshow-dialog',
  templateUrl: './slideshow-dialog.component.html',
  styleUrls: ['./slideshow-dialog.component.scss']
})
export class SlideshowDialogComponent implements OnInit {

  slides: string[];
  slideIndex: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.slides = data.project.slides;
    this.slideIndex = this.data.slideIndex;
  }

  ngOnInit() {
  }



}
