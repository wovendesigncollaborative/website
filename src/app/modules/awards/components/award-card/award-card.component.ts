import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
})
export class AwardCardComponent implements OnInit {
  @Input() public width = '100%';
  @Input() public height = '100%';
  @Input() public imageSrc: string;
  @Input() public date: string;
  @Input() public knowMoreLink: string;
  constructor() {}

  public ngOnInit() {}
}
