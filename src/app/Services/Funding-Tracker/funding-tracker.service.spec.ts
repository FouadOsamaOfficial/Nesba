import { TestBed } from '@angular/core/testing';

import { FundingTrackerService } from './funding-tracker.service';

describe('FundingTrackerService', () => {
  let service: FundingTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundingTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
