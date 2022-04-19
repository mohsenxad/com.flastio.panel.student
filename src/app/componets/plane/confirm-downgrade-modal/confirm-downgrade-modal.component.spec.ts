import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDowngradeModalComponent } from './confirm-downgrade-modal.component';

describe('ConfirmDowngradeModalComponent', () => {
  let component: ConfirmDowngradeModalComponent;
  let fixture: ComponentFixture<ConfirmDowngradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDowngradeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDowngradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
