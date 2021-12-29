import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicEmailInputComponent } from './public-email-input.component';

describe('PublicEmailInputComponent', () => {
  let component: PublicEmailInputComponent;
  let fixture: ComponentFixture<PublicEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicEmailInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
