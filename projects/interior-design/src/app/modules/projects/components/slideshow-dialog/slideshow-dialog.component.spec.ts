import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowDialogComponent } from './slideshow-dialog.component';

describe('SlideshowDialogComponent', () => {
  let component: SlideshowDialogComponent;
  let fixture: ComponentFixture<SlideshowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
