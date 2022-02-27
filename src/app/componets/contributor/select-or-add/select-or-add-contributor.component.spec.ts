import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrAddContributorComponent } from './select-or-add-contributor.component';

describe('SelectOrAddContributorComponent', () => {
  let component: SelectOrAddContributorComponent;
  let fixture: ComponentFixture<SelectOrAddContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrAddContributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrAddContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
