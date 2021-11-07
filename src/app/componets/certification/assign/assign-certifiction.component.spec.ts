import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCertifictionComponent } from './assign-certifiction.component';

describe('AssignCertifictionComponent', () => {
  let component: AssignCertifictionComponent;
  let fixture: ComponentFixture<AssignCertifictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCertifictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCertifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
