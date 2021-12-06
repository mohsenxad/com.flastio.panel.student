import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileByEmailComponent } from './share-profile-by-email.component';

describe('ShareProfileByEmailComponent', () => {
  let component: ShareProfileByEmailComponent;
  let fixture: ComponentFixture<ShareProfileByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfileByEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfileByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
