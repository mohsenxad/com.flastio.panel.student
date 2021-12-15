import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertificationComponent } from './edit-certification.component';

describe('EditCertificationComponent', () => {
  let component: EditCertificationComponent;
  let fixture: ComponentFixture<EditCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
