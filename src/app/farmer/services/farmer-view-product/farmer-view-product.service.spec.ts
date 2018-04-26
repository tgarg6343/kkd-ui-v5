import { TestBed, inject } from '@angular/core/testing';

import { FarmerViewProductService } from './farmer-view-product.service';

describe('FarmerViewProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerViewProductService]
    });
  });

  it('should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service).toBeTruthy();
  }));
});
