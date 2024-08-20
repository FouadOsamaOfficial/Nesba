import { TestBed } from '@angular/core/testing';

import { SlectedUniteService } from './slected-unite.service';

describe('SlectedUniteService', () => {
  let service: SlectedUniteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlectedUniteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
