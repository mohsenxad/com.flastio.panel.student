import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileByQRCodeComponent } from './share-profile-by-qrcode.component';

describe('ShareProfileByQRCodeComponent', () => {
  let component: ShareProfileByQRCodeComponent;
  let fixture: ComponentFixture<ShareProfileByQRCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfileByQRCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfileByQRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
