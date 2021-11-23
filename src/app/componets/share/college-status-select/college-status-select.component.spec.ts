import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeStatusSelectComponent } from './college-status-select.component';

describe('CollegeStatusSelectComponent', () => {
  let component: CollegeStatusSelectComponent;
  let fixture: ComponentFixture<CollegeStatusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeStatusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeStatusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
