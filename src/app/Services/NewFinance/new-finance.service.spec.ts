import { TestBed } from '@angular/core/testing';

import { NewFinanceService } from './new-finance.service';

describe('NewFinanceService', () => {
  let service: NewFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
