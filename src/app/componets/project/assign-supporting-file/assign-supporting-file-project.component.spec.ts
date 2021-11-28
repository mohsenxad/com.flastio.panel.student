import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSupportingFileProjectComponent } from './assign-supporting-file-project.component';

describe('AssignSupportingFileProjectComponent', () => {
  let component: AssignSupportingFileProjectComponent;
  let fixture: ComponentFixture<AssignSupportingFileProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSupportingFileProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSupportingFileProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
