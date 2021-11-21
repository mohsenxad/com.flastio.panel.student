import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillListItemComponent } from './skill-list-item.component';

describe('SkillListItemComponent', () => {
  let component: SkillListItemComponent;
  let fixture: ComponentFixture<SkillListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
