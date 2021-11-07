import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCertificationComponent } from './select-certification.component';

describe('SelectCertificationComponent', () => {
  let component: SelectCertificationComponent;
  let fixture: ComponentFixture<SelectCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
