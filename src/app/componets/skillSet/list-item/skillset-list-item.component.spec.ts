import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetListItemComponent } from './skillset-list-item.component';

describe('SkillsetListItemComponent', () => {
  let component: SkillsetListItemComponent;
  let fixture: ComponentFixture<SkillsetListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
