import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [
    trigger('fall', [
      state('start', style({
        flex: "0 1 0",
      })),
      state('end', style({
        flex: "1 1 0",
      })),
      transition('start => end', [
        animate("1s ease-in-out")
      ]),
    ]),
    trigger('shrink', [
      state('start', style({
        width: "200px"
      })),
      state('end', style({
        width: "100px"
      })),
      transition('start => end', [
        animate("2s ease-in-out")]),
    ]),
    trigger('spacing', [
      state('start', style({
        marginRight: "7vw"
      })),
      state('end', style({
        marginRight: "5vw",
      })),
      transition('start => end', [
        animate("2s ease-in-out")]),
    ]),
    trigger('imageAnimation', [
      state('start', style({
        width: 0,
        height: 0,
        opacity: 0
      })),
      state('end', style({
        width: "400px",
        height: "400px",
        opacity: 1
      })),
      transition('start => end', [
        animate("10ms ease-in-out", style({
          width: "400px",
          height: "400px"
        })),
        animate("2s ease-in-out", style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class WhatWeDoComponent implements OnInit {

  imageSrc = 'assets/img/nisha.jpg';
  falling = true;
  shrink = true;
  imageAnimation = true;

  constructor() { }

  ngOnInit() {

  }

  onImageClick() {
    this.falling = false;
    this.shrink = false;
    setTimeout(() => this.imageAnimation = false, 2000)
  }

}
