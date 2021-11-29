import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStylePanelComponent } from './work-style-panel.component';

describe('WorkStylePanelComponent', () => {
  let component: WorkStylePanelComponent;
  let fixture: ComponentFixture<WorkStylePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStylePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStylePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
