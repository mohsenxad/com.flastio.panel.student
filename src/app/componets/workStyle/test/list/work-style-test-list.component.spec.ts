import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleTestListComponent } from './work-style-test-list.component';

describe('WorkStyleTestListComponent', () => {
  let component: WorkStyleTestListComponent;
  let fixture: ComponentFixture<WorkStyleTestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleTestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
