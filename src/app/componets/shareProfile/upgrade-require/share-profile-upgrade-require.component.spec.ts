import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileUpgradeRequireComponent } from './share-profile-upgrade-require.component';

describe('ShareProfileUpgradeRequireComponent', () => {
  let component: ShareProfileUpgradeRequireComponent;
  let fixture: ComponentFixture<ShareProfileUpgradeRequireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfileUpgradeRequireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfileUpgradeRequireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
