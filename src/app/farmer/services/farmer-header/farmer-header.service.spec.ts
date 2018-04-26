import { TestBed, inject } from '@angular/core/testing';

import { FarmerHeaderService } from './farmer-header.service';

describe('FarmerHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerHeaderService]
    });
  });

  it('should be created', inject([FarmerHeaderService], (service: FarmerHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
