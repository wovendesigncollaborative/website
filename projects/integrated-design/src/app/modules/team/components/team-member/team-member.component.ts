import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() description: string;

  @Input() direction: 'column' | 'column-reverse' = 'column';

  get fxLayout() {
    return `${this.direction} center`;
  }

  constructor() { }

  ngOnInit() {
  }

}
