import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear = new Date().getFullYear();
  constructor() {}

  public addressFirstPart = '6/1 Penthouse, Rich Homes,';
  public addressSecondPart = 'Richmond Road, Bangalore-India';
  public ngOnInit() {}
}
