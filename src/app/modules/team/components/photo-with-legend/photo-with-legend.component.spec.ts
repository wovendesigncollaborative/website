import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWithLegendComponent } from './photo-with-legend.component';

describe('PhotoWithLegendComponent', () => {
  let component: PhotoWithLegendComponent;
  let fixture: ComponentFixture<PhotoWithLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoWithLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoWithLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
