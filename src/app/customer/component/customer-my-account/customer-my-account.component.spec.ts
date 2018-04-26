import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMyAccountComponent } from './customer-my-account.component';

describe('CustomerMyAccountComponent', () => {
  let component: CustomerMyAccountComponent;
  let fixture: ComponentFixture<CustomerMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
