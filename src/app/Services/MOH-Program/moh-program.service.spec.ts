import { TestBed } from '@angular/core/testing';

import { MOHProgramService } from './moh-program.service';

describe('MOHProgramService', () => {
  let service: MOHProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MOHProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
