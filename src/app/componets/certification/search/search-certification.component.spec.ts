import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCertificationComponent } from './search-certification.component';

describe('SearchCertificationComponent', () => {
  let component: SearchCertificationComponent;
  let fixture: ComponentFixture<SearchCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
