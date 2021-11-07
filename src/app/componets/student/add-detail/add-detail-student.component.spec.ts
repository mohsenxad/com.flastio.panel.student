import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailStudentComponent } from './add-detail-student.component';

describe('AddDetailStudentComponent', () => {
  let component: AddDetailStudentComponent;
  let fixture: ComponentFixture<AddDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
