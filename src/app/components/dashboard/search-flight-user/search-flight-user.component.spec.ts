import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightUserComponent } from './search-flight-user.component';

describe('SearchFlightUserComponent', () => {
  let component: SearchFlightUserComponent;
  let fixture: ComponentFixture<SearchFlightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
