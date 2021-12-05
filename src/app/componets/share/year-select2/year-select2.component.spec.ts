import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelect2Component } from './year-select2.component';

describe('YearSelect2Component', () => {
  let component: YearSelect2Component;
  let fixture: ComponentFixture<YearSelect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearSelect2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
