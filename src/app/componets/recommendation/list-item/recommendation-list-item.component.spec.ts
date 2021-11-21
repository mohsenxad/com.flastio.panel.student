import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationListItemComponent } from './recommendation-list-item.component';

describe('RecommendationListItemComponent', () => {
  let component: RecommendationListItemComponent;
  let fixture: ComponentFixture<RecommendationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
