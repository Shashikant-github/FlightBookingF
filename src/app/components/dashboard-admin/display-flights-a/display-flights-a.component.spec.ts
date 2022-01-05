import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlightsAComponent } from './display-flights-a.component';

describe('DisplayFlightsAComponent', () => {
  let component: DisplayFlightsAComponent;
  let fixture: ComponentFixture<DisplayFlightsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFlightsAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlightsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
