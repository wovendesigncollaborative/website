import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComingSoonPageComponent } from './coming-soon-page.component';

describe('ComingSoonPageComponent', () => {
  let component: ComingSoonPageComponent;
  let fixture: ComponentFixture<ComingSoonPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ComingSoonPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
