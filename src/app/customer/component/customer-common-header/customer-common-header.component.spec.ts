import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCommonHeaderComponent } from './customer-common-header.component';

describe('CustomerCommonHeaderComponent', () => {
  let component: CustomerCommonHeaderComponent;
  let fixture: ComponentFixture<CustomerCommonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCommonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
