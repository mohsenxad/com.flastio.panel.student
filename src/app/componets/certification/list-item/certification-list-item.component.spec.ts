import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationListItemComponent } from './certification-list-item.component';

describe('CertificationListItemComponent', () => {
  let component: CertificationListItemComponent;
  let fixture: ComponentFixture<CertificationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
