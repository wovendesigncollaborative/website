import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit {

  headline = `With a a multi-disciplinary team, and over 9 years of experience in the field,
  the experts at Woven Design Collective works closely with NGOs,
  community associations and local groups to analyse and assess the status at the grassroot.
  We arrive upon contextual solutions that are rooted in multi-disciplinarity and critical thinking.
  `;
  secondHeadline = `We engage with our clients in 3 ways depending on requirements and constraints.`;
  constructor() { }

  ngOnInit() {
  }

}
