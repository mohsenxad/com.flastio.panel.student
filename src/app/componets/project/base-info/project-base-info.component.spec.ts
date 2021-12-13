import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBaseInfoComponent } from './project-base-info.component';

describe('ProjectBaseInfoComponent', () => {
  let component: ProjectBaseInfoComponent;
  let fixture: ComponentFixture<ProjectBaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBaseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
