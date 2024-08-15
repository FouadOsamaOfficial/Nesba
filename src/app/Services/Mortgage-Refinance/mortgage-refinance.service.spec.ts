import { TestBed } from '@angular/core/testing';

import { MortgageRefinanceService } from './mortgage-refinance.service';

describe('MortgageRefinanceService', () => {
  let service: MortgageRefinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageRefinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
