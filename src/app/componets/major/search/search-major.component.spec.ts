import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMajorComponent } from './search-major.component';

describe('SearchMajorComponent', () => {
  let component: SearchMajorComponent;
  let fixture: ComponentFixture<SearchMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
