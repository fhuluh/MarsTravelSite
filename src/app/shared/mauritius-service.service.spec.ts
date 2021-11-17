import { TestBed } from '@angular/core/testing';

import { MauritiusServiceService } from './mauritius-service.service';

describe('MauritiusServiceService', () => {
  let service: MauritiusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MauritiusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
