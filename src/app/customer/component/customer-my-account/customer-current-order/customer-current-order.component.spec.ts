import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCurrentOrderComponent } from './customer-current-order.component';

describe('CustomerCurrentOrderComponent', () => {
  let component: CustomerCurrentOrderComponent;
  let fixture: ComponentFixture<CustomerCurrentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCurrentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
