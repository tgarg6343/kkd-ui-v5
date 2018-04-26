import { TestBed, inject } from '@angular/core/testing';

import { CustomerAuthenticationService } from './customer-authentication.service';

describe('CustomerAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthenticationService]
    });
  });

  it('should be created', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
