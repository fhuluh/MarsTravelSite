import { TestBed } from '@angular/core/testing';

import { ToastsContainer.ComponentService } from './toasts-container.component.service';

describe('ToastsContainer.ComponentService', () => {
  let service: ToastsContainer.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastsContainer.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
