import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingFileListItemComponent } from './supporting-file-list-item.component';

describe('SupportingFileListItemComponent', () => {
  let component: SupportingFileListItemComponent;
  let fixture: ComponentFixture<SupportingFileListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingFileListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingFileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
