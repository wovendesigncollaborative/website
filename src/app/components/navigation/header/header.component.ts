import { Component, EventEmitter, Output, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public ngOnInit() { }


          public onToggleSidenav = () => {
    this.sidenavToggle.emit();


  }
}
