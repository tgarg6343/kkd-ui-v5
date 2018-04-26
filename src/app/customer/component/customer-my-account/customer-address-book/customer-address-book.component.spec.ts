import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressBookComponent } from './customer-address-book.component';

describe('CustomerAddressBookComponent', () => {
  let component: CustomerAddressBookComponent;
  let fixture: ComponentFixture<CustomerAddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddressBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
