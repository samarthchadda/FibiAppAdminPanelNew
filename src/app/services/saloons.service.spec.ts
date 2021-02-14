import { TestBed } from '@angular/core/testing';

import { SaloonsService } from './saloons.service';

describe('SaloonsService', () => {
  let service: SaloonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaloonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
