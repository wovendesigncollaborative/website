import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-with-legend',
  templateUrl: './photo-with-legend.component.html',
  styleUrls: ['./photo-with-legend.component.scss']
})
export class PhotoWithLegendComponent implements OnInit {
  @Input() direction: "column" | "column-reverse" = "column"

  @Input() width: string = "200px"

  @Input() legend: string = "legend"

  @Input() src: string

  @Input() height: string = "100%"
  constructor() { }

  ngOnInit() {
  }

}
