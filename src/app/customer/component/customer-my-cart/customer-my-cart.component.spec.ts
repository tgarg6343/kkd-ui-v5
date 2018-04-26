import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyCartComponent } from './customer-my-cart.component';

describe('CustomerMyCartComponent', () => {
  let component: CustomerMyCartComponent;
  let fixture: ComponentFixture<CustomerMyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
