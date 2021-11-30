import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActionPanelComponent } from './student-action-panel.component';

describe('StudentActionPanelComponent', () => {
  let component: StudentActionPanelComponent;
  let fixture: ComponentFixture<StudentActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentActionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
