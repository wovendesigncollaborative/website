import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

 competencies = ['Coffee', 'Cleaning', 'Humor', 'Eating', 'Shouting', 'Complaining'];
 members = [{
   name: 'Paul Dejean',
   role: 'Developer'
 },
 {
  name: 'Chitraa Raj',
  role: 'Chai maker'
}];

  constructor() { }

  ngOnInit() {
  }

}
