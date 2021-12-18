import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetPanelComponent } from './skillset-panel.component';

describe('SkillsetPanelComponent', () => {
  let component: SkillsetPanelComponent;
  let fixture: ComponentFixture<SkillsetPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
