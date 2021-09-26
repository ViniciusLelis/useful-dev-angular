import { TestBed } from '@angular/core/testing';

import { UsefulDevService } from './useful-dev.service';

describe('UsefulDevService', () => {
  let service: UsefulDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsefulDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
