import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerChangePasswordComponent } from './farmer-change-password.component';

describe('FarmerChangePasswordComponent', () => {
  let component: FarmerChangePasswordComponent;
  let fixture: ComponentFixture<FarmerChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
