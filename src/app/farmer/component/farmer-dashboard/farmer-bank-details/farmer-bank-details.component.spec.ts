import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankDetailsComponent } from './farmer-bank-details.component';

describe('FarmerBankDetailsComponent', () => {
  let component: FarmerBankDetailsComponent;
  let fixture: ComponentFixture<FarmerBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
