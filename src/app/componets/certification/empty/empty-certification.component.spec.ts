import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCertificationComponent } from './empty-certification.component';

describe('EmptyCertificationComponent', () => {
  let component: EmptyCertificationComponent;
  let fixture: ComponentFixture<EmptyCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
