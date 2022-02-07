import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAssignedCertificationComponent } from './select-assigned-certification.component';

describe('SelectAssignedCertificationComponent', () => {
  let component: SelectAssignedCertificationComponent;
  let fixture: ComponentFixture<SelectAssignedCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAssignedCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAssignedCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
