import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationActionPanelComponent } from './recommendation-action-panel.component';

describe('RecommendationActionPanelComponent', () => {
  let component: RecommendationActionPanelComponent;
  let fixture: ComponentFixture<RecommendationActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationActionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
