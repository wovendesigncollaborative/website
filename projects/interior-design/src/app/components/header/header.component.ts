import { Component, OnInit } from '@angular/core';
import { faBook, faEye, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBook = faBook;
  faEye = faEye;
  faUsers = faUsers;

  constructor() { }

  ngOnInit() {
  }

}
