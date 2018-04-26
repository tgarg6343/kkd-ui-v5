import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarComponent } from './aadhaar.component';

describe('AadhaarComponent', () => {
  let component: AadhaarComponent;
  let fixture: ComponentFixture<AadhaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadhaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
