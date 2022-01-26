import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmiMitsubishiComponent } from './hmi-mitsubishi.component';

describe('HmiMitsubishiComponent', () => {
  let component: HmiMitsubishiComponent;
  let fixture: ComponentFixture<HmiMitsubishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmiMitsubishiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmiMitsubishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
