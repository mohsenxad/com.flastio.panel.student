import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingFileListComponent } from './supporting-file-list.component';

describe('SupportingFileListComponent', () => {
  let component: SupportingFileListComponent;
  let fixture: ComponentFixture<SupportingFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingFileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
