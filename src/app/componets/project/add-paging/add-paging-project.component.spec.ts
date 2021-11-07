import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPagingProjectComponent } from './add-paging-project.component';

describe('AddPagingProjectComponent', () => {
  let component: AddPagingProjectComponent;
  let fixture: ComponentFixture<AddPagingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPagingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPagingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
