import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTypeProjectComponent } from './select-type-project.component';

describe('SelectTypeProjectComponent', () => {
  let component: SelectTypeProjectComponent;
  let fixture: ComponentFixture<SelectTypeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTypeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTypeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
