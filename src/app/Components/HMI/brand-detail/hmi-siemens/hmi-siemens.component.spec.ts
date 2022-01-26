import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmiSiemensComponent } from './hmi-siemens.component';

describe('HmiSiemensComponent', () => {
  let component: HmiSiemensComponent;
  let fixture: ComponentFixture<HmiSiemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmiSiemensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmiSiemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
