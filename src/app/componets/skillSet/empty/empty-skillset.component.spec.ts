import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySkillsetComponent } from './empty-skillset.component';

describe('EmptySkillsetComponent', () => {
  let component: EmptySkillsetComponent;
  let fixture: ComponentFixture<EmptySkillsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptySkillsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
