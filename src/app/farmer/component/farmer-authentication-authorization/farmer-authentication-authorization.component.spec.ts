import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAuthenticationAuthorizationComponent } from './farmer-authentication-authorization.component';

describe('FarmerAuthenticationAuthorizationComponent', () => {
  let component: FarmerAuthenticationAuthorizationComponent;
  let fixture: ComponentFixture<FarmerAuthenticationAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAuthenticationAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAuthenticationAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
