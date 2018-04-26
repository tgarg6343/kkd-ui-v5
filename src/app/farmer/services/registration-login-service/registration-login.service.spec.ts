import { TestBed, inject } from '@angular/core/testing';

import { RegistrationLoginService } from './registration-login.service';

describe('RegistrationLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationLoginService]
    });
  });

  it('should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service).toBeTruthy();
  }));
});
