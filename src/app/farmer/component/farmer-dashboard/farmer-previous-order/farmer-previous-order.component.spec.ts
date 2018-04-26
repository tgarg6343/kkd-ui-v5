import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPreviousOrderComponent } from './farmer-previous-order.component';

describe('FarmerPreviousOrderComponent', () => {
  let component: FarmerPreviousOrderComponent;
  let fixture: ComponentFixture<FarmerPreviousOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerPreviousOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPreviousOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
