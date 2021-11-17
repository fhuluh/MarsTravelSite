import { TestBed } from '@angular/core/testing';

import { MaldivesServiceService } from './maldives-service.service';

describe('MaldivesServiceService', () => {
  let service: MaldivesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaldivesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
