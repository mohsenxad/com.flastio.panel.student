import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicitySelectComponent } from './ethnicity-select.component';

describe('EthnicitySelectComponent', () => {
  let component: EthnicitySelectComponent;
  let fixture: ComponentFixture<EthnicitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthnicitySelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
