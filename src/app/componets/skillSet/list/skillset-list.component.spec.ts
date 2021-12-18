import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetListComponent } from './skillset-list.component';

describe('SkillsetListComponent', () => {
  let component: SkillsetListComponent;
  let fixture: ComponentFixture<SkillsetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
