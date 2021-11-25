import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptPanelComponent } from './transcript-panel.component';

describe('TranscriptPanelComponent', () => {
  let component: TranscriptPanelComponent;
  let fixture: ComponentFixture<TranscriptPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscriptPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
