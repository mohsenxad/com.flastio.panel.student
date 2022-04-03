import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsWorkingModalComponent } from './analytics-working-modal.component';

describe('AnalyticsWorkingModalComponent', () => {
  let component: AnalyticsWorkingModalComponent;
  let fixture: ComponentFixture<AnalyticsWorkingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsWorkingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsWorkingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
