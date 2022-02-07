import { TestBed } from '@angular/core/testing';

import { AssignedCertificationService } from './assigned-certification.service';

describe('AssignedCertificationService', () => {
  let service: AssignedCertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedCertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
