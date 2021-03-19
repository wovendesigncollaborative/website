import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlideshowDialogComponent } from './slideshow-dialog.component';

describe('SlideshowDialogComponent', () => {
  let component: SlideshowDialogComponent;
  let fixture: ComponentFixture<SlideshowDialogComponent>;

  beforeEach(waitForAsync(() => {
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
