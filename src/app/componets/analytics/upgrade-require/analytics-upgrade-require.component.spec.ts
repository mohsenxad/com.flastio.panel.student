import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsUpgradeRequireComponent } from './analytics-upgrade-require.component';

describe('AnalyticsUpgradeRequireComponent', () => {
  let component: AnalyticsUpgradeRequireComponent;
  let fixture: ComponentFixture<AnalyticsUpgradeRequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsUpgradeRequireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsUpgradeRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
