import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'expansion-card',
  templateUrl: './expansion-card.component.html',
  styleUrls: ['./expansion-card.component.scss']
})
export class ExpansionCardComponent implements OnInit {

  @Input() imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
