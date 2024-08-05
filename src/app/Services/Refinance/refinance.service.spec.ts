import { TestBed } from '@angular/core/testing';

import { RefinanceService } from './refinance.service';

describe('RefinanceService', () => {
  let service: RefinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
