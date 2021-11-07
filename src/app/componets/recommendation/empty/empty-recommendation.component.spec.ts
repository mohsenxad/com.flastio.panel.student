import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRecommendationComponent } from './empty-recommendation.component';

describe('EmptyRecommendationComponent', () => {
  let component: EmptyRecommendationComponent;
  let fixture: ComponentFixture<EmptyRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
