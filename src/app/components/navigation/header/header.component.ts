import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { isAbsolute } from 'path';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
