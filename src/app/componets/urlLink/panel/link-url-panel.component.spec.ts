import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUrlPanelComponent } from './link-url-panel.component';

describe('LinkUrlPanelComponent', () => {
  let component: LinkUrlPanelComponent;
  let fixture: ComponentFixture<LinkUrlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUrlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUrlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
