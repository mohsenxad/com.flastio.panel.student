import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationApprovalActionPanelComponent } from './recommendation-approval-action-panel.component';

describe('RecommendationApprovalActionPanelComponent', () => {
  let component: RecommendationApprovalActionPanelComponent;
  let fixture: ComponentFixture<RecommendationApprovalActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationApprovalActionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationApprovalActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
