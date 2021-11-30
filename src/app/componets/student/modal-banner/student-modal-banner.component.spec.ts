import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModalBannerComponent } from './student-modal-banner.component';

describe('StudentModalBannerComponent', () => {
  let component: StudentModalBannerComponent;
  let fixture: ComponentFixture<StudentModalBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentModalBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModalBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
