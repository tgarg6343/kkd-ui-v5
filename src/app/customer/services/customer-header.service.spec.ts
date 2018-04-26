import { TestBed, inject } from '@angular/core/testing';

import { CustomerHeaderService } from './customer-header.service';

describe('CustomerHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerHeaderService]
    });
  });

  it('should be created', inject([CustomerHeaderService], (service: CustomerHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
