import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityEmailInputComponent } from './university-email-input.component';

describe('UniversityEmailInputComponent', () => {
  let component: UniversityEmailInputComponent;
  let fixture: ComponentFixture<UniversityEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityEmailInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
