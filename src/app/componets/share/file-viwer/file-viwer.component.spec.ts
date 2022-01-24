import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViwerComponent } from './file-viwer.component';

describe('FileViwerComponent', () => {
  let component: FileViwerComponent;
  let fixture: ComponentFixture<FileViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileViwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
