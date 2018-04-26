import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAlternateMobileComponent } from './farmer-alternate-mobile.component';

describe('FarmerAlternateMobileComponent', () => {
  let component: FarmerAlternateMobileComponent;
  let fixture: ComponentFixture<FarmerAlternateMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAlternateMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAlternateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
