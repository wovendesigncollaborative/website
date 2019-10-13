import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss']
})
export class AwardCardComponent implements OnInit {
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() imageSrc: string;
  @Input() date: string;
  @Input() knowMoreLink: string;
  constructor() { }

  ngOnInit() {
  }

}
