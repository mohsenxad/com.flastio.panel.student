import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRecommendationComponent } from './request-recommendation.component';

describe('RequestRecommendationComponent', () => {
  let component: RequestRecommendationComponent;
  let fixture: ComponentFixture<RequestRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
