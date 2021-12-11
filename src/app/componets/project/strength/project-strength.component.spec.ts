import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStrengthComponent } from './project-strength.component';

describe('ProjectStrengthComponent', () => {
  let component: ProjectStrengthComponent;
  let fixture: ComponentFixture<ProjectStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
