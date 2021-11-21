import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUrlListItemComponent } from './link-url-list-item.component';

describe('LinkUrlListItemComponent', () => {
  let component: LinkUrlListItemComponent;
  let fixture: ComponentFixture<LinkUrlListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUrlListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUrlListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
