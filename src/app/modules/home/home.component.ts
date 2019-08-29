import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { HOME_PAGE_SLIDES, HOME_PAGE_TEXTS , HOME_PAGE_TITLES} from './slides';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  slides = HOME_PAGE_SLIDES;
  texts = HOME_PAGE_TEXTS;
  titles = HOME_PAGE_TITLES;

  legend = HOME_PAGE_TEXTS[0];
  title = HOME_PAGE_TITLES[0];


  constructor(public cdr: ChangeDetectorRef) {
  }


  @ViewChild('textContainer', { static: false }) textContainer;


  swipeTextSlide(index) {
    this.legend = this.texts[index];
    this.title = this.titles[index];
  }

}

