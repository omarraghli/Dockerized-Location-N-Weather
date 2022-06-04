import { TestBed } from '@angular/core/testing';

import { JwtAPIService } from './jwt-api.service';

describe('JwtAPIService', () => {
  let service: JwtAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
