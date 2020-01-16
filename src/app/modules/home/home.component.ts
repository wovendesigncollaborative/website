import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { HOME_PAGE_SLIDES, HOME_PAGE_TEXTS, HOME_PAGE_TITLES } from './slides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public slides = HOME_PAGE_SLIDES;
  public descriptions = HOME_PAGE_TEXTS;
  public titles = HOME_PAGE_TITLES;

  public description = HOME_PAGE_TEXTS[0];
  public title = HOME_PAGE_TITLES[0];
  public index;

  constructor(public cdr: ChangeDetectorRef) {}

  @ViewChild('textContainer', { static: false }) public textContainer;

  public swipeTextSlide(index) {
    this.index = index;
    this.description = this.descriptions[index];
    this.title = this.titles[index];
  }
}
