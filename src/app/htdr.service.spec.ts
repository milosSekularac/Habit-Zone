import { TestBed } from '@angular/core/testing';

import { HtdrService } from './htdr.service';

describe('HtdrService', () => {
  let service: HtdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
