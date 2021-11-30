import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleGraphComponent } from './work-style-graph.component';

describe('WorkStyleGraphComponent', () => {
  let component: WorkStyleGraphComponent;
  let fixture: ComponentFixture<WorkStyleGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
