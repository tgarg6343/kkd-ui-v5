import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCurrentOrderComponent } from './farmer-current-order.component';

describe('FarmerCurrentOrderComponent', () => {
  let component: FarmerCurrentOrderComponent;
  let fixture: ComponentFixture<FarmerCurrentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCurrentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
