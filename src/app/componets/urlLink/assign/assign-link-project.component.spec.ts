import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLinkProjectComponent } from './assign-link-project.component';

describe('AssignLinkProjectComponent', () => {
  let component: AssignLinkProjectComponent;
  let fixture: ComponentFixture<AssignLinkProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignLinkProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLinkProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
