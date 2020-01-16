import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-with-legend',
  templateUrl: './photo-with-legend.component.html',
  styleUrls: ['./photo-with-legend.component.scss'],
})
export class PhotoWithLegendComponent implements OnInit {
  @Input() public direction: 'column' | 'column-reverse' = 'column';

  @Input() public width = '200px';

  @Input() public legend = 'legend';

  @Input() public src: string;

  @Input() public height = '100%';
  constructor() {}

  public ngOnInit() {}
}
