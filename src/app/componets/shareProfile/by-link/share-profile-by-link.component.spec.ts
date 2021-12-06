import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileByLinkComponent } from './share-profile-by-link.component';

describe('ShareProfileByLinkComponent', () => {
  let component: ShareProfileByLinkComponent;
  let fixture: ComponentFixture<ShareProfileByLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfileByLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfileByLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
