import { TestBed } from '@angular/core/testing';

import { UnitsModalService } from './units-modal.service';

describe('UnitsModalService', () => {
  let service: UnitsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
