import { TestBed, inject } from '@angular/core/testing';

import { VerifytokenService } from './verifytoken.service';

describe('VerifytokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifytokenService]
    });
  });

  it('should be created', inject([VerifytokenService], (service: VerifytokenService) => {
    expect(service).toBeTruthy();
  }));
});
