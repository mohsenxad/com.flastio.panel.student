import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBannerComponent } from './student-banner.component';

describe('StudentBannerComponent', () => {
  let component: StudentBannerComponent;
  let fixture: ComponentFixture<StudentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
