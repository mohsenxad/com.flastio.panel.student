import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorListItemComponent } from './contributor-list-item.component';

describe('ContributorListItemComponent', () => {
  let component: ContributorListItemComponent;
  let fixture: ComponentFixture<ContributorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
