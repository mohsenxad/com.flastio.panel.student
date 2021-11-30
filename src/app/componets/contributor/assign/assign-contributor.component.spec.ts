import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignContributorComponent } from './assign-contributor.component';

describe('AssignContributorComponent', () => {
  let component: AssignContributorComponent;
  let fixture: ComponentFixture<AssignContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignContributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
