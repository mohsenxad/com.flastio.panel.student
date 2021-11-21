import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUrlListComponent } from './link-url-list.component';

describe('LinkUrlListComponent', () => {
  let component: LinkUrlListComponent;
  let fixture: ComponentFixture<LinkUrlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUrlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
