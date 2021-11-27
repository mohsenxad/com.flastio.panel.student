import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePanelComponent } from './resume-panel.component';

describe('ResumePanelComponent', () => {
  let component: ResumePanelComponent;
  let fixture: ComponentFixture<ResumePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
