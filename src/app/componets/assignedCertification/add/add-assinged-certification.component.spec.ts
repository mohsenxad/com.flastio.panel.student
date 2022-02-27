import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssingedCertificationComponent } from './add-assinged-certification.component';

describe('AddAssingedCertificationComponent', () => {
  let component: AddAssingedCertificationComponent;
  let fixture: ComponentFixture<AddAssingedCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssingedCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssingedCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
