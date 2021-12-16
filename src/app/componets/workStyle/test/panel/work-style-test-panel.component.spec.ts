import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleTestPanelComponent } from './work-style-test-panel.component';

describe('WorkStyleTestPanelComponent', () => {
  let component: WorkStyleTestPanelComponent;
  let fixture: ComponentFixture<WorkStyleTestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleTestPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleTestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
