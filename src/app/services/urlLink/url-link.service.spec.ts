import { TestBed } from '@angular/core/testing';

import { UrlLinkService } from './url-link.service';

describe('UrlLinkService', () => {
  let service: UrlLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
