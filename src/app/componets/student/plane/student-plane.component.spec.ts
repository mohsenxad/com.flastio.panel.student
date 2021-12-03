import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlaneComponent } from './student-plane.component';

describe('StudentPlaneComponent', () => {
  let component: StudentPlaneComponent;
  let fixture: ComponentFixture<StudentPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
