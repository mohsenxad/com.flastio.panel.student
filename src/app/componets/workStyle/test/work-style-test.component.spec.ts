import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleTestComponent } from './work-style-test.component';

describe('WorkStyleTestComponent', () => {
  let component: WorkStyleTestComponent;
  let fixture: ComponentFixture<WorkStyleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
