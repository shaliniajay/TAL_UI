import { TestBed } from '@angular/core/testing';

import { TalServiceService } from './tal-service.service';

describe('TalServiceService', () => {
  let service: TalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
