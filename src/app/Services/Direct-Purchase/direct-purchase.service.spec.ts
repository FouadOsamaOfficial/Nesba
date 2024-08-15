import { TestBed } from '@angular/core/testing';

import { DirectPurchaseService } from './direct-purchase.service';

describe('DirectPurchaseService', () => {
  let service: DirectPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
