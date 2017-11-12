import { TestBed, inject } from '@angular/core/testing';

import { Candidates.ServiceService } from './candidates.service.service';

describe('Candidates.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Candidates.ServiceService]
    });
  });

  it('should be created', inject([Candidates.ServiceService], (service: Candidates.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
