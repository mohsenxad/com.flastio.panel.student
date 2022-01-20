import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneCalculatorComponent } from './plane-calculator.component';

describe('PlaneCalculatorComponent', () => {
  let component: PlaneCalculatorComponent;
  let fixture: ComponentFixture<PlaneCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
