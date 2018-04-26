import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerViewProductComponent } from './farmer-view-product.component';

describe('FarmerViewProductComponent', () => {
  let component: FarmerViewProductComponent;
  let fixture: ComponentFixture<FarmerViewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerViewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
