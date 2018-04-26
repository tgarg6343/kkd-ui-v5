import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDeleteProfileComponent } from './farmer-delete-profile.component';

describe('FarmerDeleteProfileComponent', () => {
  let component: FarmerDeleteProfileComponent;
  let fixture: ComponentFixture<FarmerDeleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDeleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
