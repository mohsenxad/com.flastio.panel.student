import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationActionPanelComponent } from './certification-action-panel.component';

describe('CertificationActionPanelComponent', () => {
  let component: CertificationActionPanelComponent;
  let fixture: ComponentFixture<CertificationActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationActionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
