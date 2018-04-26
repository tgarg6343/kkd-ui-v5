import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPreviousOrderComponent } from './customer-previous-order.component';

describe('CustomerPreviousOrderComponent', () => {
  let component: CustomerPreviousOrderComponent;
  let fixture: ComponentFixture<CustomerPreviousOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPreviousOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPreviousOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
