import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingFilePanelComponent } from './supporting-file-panel.component';

describe('SupportingFilePanelComponent', () => {
  let component: SupportingFilePanelComponent;
  let fixture: ComponentFixture<SupportingFilePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingFilePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingFilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
