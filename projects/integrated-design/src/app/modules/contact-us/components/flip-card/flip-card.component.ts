import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  @Input() public imageSrc: string;
  @Input() public backgroundColor;
  @Input() public radius = '250px';

  constructor() {}

  public ngOnInit() {}
}
