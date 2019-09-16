import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() radius: string;
  @Input() backgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
