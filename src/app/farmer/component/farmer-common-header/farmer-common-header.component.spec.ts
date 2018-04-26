import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCommonHeaderComponent } from './farmer-common-header.component';

describe('FarmerCommonHeaderComponent', () => {
  let component: FarmerCommonHeaderComponent;
  let fixture: ComponentFixture<FarmerCommonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCommonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
