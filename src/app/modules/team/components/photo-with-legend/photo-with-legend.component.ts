import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-with-legend',
  templateUrl: './photo-with-legend.component.html',
  styleUrls: ['./photo-with-legend.component.scss'],
})
export class PhotoWithLegendComponent implements OnInit {

  @Input() public width = '200px';

  @Input() public legend = 'legend';

  @Input() public src: string;

  @Input() public height: string;
  constructor() { }

  public ngOnInit() { }
}
