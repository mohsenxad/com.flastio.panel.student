import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorPanelComponent } from './contributor-panel.component';

describe('ContributorPanelComponent', () => {
  let component: ContributorPanelComponent;
  let fixture: ComponentFixture<ContributorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
