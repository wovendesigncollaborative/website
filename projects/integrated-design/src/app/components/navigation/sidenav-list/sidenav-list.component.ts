import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Output() public sidenavClose = new EventEmitter();

  constructor() {}

  public ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
