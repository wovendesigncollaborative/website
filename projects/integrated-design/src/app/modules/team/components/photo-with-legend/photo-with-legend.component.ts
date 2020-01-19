import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-with-legend',
  templateUrl: './photo-with-legend.component.html',
  styleUrls: ['./photo-with-legend.component.scss'],
})
export class PhotoWithLegendComponent implements OnInit {

  @Input() public width: string = "100%";

  @Input() public legend : string;

  @Input() public src: string;

  constructor() { }

  public ngOnInit() { }
}
