import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationPanelComponent } from './certification-panel.component';

describe('CertificationPanelComponent', () => {
  let component: CertificationPanelComponent;
  let fixture: ComponentFixture<CertificationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
