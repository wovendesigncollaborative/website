import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { HOME_PAGE_SLIDES, HOME_PAGE_TEXTS , HOME_PAGE_TITLES} from './slides';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  slides = HOME_PAGE_SLIDES;
  descriptions = HOME_PAGE_TEXTS;
  titles = HOME_PAGE_TITLES;

  description = HOME_PAGE_TEXTS[0];
  title = HOME_PAGE_TITLES[0];


  constructor(public cdr: ChangeDetectorRef) {
  }


  @ViewChild('textContainer', { static: false }) textContainer;


  swipeTextSlide(index) {
    this.description = this.descriptions[index];
    this.title = this.titles[index];
  }

}

