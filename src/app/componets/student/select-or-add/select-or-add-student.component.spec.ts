import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrAddStudentComponent } from './select-or-add-student.component';

describe('SelectOrAddStudentComponent', () => {
  let component: SelectOrAddStudentComponent;
  let fixture: ComponentFixture<SelectOrAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
