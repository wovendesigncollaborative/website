import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Project } from '../../data/projects';

@Component({
  selector: 'slideshow-dialog',
  templateUrl: './slideshow-dialog.component.html',
  styleUrls: ['./slideshow-dialog.component.scss']
})
export class SlideshowDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Project) { }

  ngOnInit() {
  }

  onClick() {
    console.log('click')
  }


}
