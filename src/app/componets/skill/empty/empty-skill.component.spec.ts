import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySkillComponent } from './empty-skill.component';

describe('EmptySkillComponent', () => {
  let component: EmptySkillComponent;
  let fixture: ComponentFixture<EmptySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptySkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
