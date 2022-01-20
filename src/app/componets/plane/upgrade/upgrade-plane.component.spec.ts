import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePlaneComponent } from './upgrade-plane.component';

describe('UpgradePlaneComponent', () => {
  let component: UpgradePlaneComponent;
  let fixture: ComponentFixture<UpgradePlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradePlaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradePlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
