import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerHeaderComponent } from './farmer-header.component';

describe('FarmerHeaderComponent', () => {
  let component: FarmerHeaderComponent;
  let fixture: ComponentFixture<FarmerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
