import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStrengthComponent } from './portfolio-strength.component';

describe('PortfolioStrengthComponent', () => {
  let component: PortfolioStrengthComponent;
  let fixture: ComponentFixture<PortfolioStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
