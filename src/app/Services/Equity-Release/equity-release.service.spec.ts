import { TestBed } from '@angular/core/testing';

import { EquityReleaseService } from './equity-release.service';

describe('EquityReleaseService', () => {
  let service: EquityReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquityReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
