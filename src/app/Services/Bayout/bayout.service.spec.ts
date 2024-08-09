import { TestBed } from '@angular/core/testing';

import { BayoutService } from './bayout.service';

describe('BayoutService', () => {
  let service: BayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
