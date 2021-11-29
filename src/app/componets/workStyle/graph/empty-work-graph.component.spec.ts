import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWorkGraphComponent } from './empty-work-graph.component';

describe('EmptyWorkGraphComponent', () => {
  let component: EmptyWorkGraphComponent;
  let fixture: ComponentFixture<EmptyWorkGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyWorkGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyWorkGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
