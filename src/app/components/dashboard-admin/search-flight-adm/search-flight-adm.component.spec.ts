import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightAdmComponent } from './search-flight-adm.component';

describe('SearchFlightAdmComponent', () => {
  let component: SearchFlightAdmComponent;
  let fixture: ComponentFixture<SearchFlightAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
