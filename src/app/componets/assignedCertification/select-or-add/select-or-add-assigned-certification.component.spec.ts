import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrAddAssignedCertificationComponent } from './select-or-add-assigned-certification.component';

describe('SelectOrAddAssignedCertificationComponent', () => {
  let component: SelectOrAddAssignedCertificationComponent;
  let fixture: ComponentFixture<SelectOrAddAssignedCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrAddAssignedCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrAddAssignedCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
