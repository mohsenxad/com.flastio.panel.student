import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWorkStyleComponent } from './empty-work-style.component';

describe('EmptyWorkStyleComponent', () => {
  let component: EmptyWorkStyleComponent;
  let fixture: ComponentFixture<EmptyWorkStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyWorkStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyWorkStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
