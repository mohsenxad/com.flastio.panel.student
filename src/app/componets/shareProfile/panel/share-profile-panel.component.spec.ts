import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfilePanelComponent } from './share-profile-panel.component';

describe('ShareProfilePanelComponent', () => {
  let component: ShareProfilePanelComponent;
  let fixture: ComponentFixture<ShareProfilePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfilePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
