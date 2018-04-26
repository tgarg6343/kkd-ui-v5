import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMyAccountComponent } from './farmer-my-account.component';

describe('FarmerMyAccountComponent', () => {
  let component: FarmerMyAccountComponent;
  let fixture: ComponentFixture<FarmerMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
