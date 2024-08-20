import { TestBed } from '@angular/core/testing';

import { MarketReadyUnitsService } from './market-ready-units.service';

describe('MarketReadyUnitsService', () => {
  let service: MarketReadyUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketReadyUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
