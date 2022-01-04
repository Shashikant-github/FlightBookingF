import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlightComponent } from './display-flight.component';

describe('DisplayFlightComponent', () => {
  let component: DisplayFlightComponent;
  let fixture: ComponentFixture<DisplayFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
