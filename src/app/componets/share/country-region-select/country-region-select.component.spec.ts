import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRegionSelectComponent } from './country-region-select.component';

describe('CountryRegionSelectComponent', () => {
  let component: CountryRegionSelectComponent;
  let fixture: ComponentFixture<CountryRegionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryRegionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRegionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
