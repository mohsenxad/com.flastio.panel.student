import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationFileUploaderComponent } from './certification-file-uploader.component';

describe('CertificationFileUploaderComponent', () => {
  let component: CertificationFileUploaderComponent;
  let fixture: ComponentFixture<CertificationFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
