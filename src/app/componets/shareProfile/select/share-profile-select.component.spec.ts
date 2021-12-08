import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileSelectComponent } from './share-profile-select.component';

describe('ShareProfileSelectComponent', () => {
  let component: ShareProfileSelectComponent;
  let fixture: ComponentFixture<ShareProfileSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareProfileSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProfileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
