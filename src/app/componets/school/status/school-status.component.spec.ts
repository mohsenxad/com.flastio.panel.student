import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStatusComponent } from './school-status.component';

describe('SchoolStatusComponent', () => {
  let component: SchoolStatusComponent;
  let fixture: ComponentFixture<SchoolStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
