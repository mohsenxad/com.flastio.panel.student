import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStyleTestListItemComponent } from './work-style-test-list-item.component';

describe('WorkStyleTestListItemComponent', () => {
  let component: WorkStyleTestListItemComponent;
  let fixture: ComponentFixture<WorkStyleTestListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStyleTestListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStyleTestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
