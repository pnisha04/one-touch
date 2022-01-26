import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcMitsubishiComponent } from './plc-mitsubishi.component';

describe('PlcMitsubishiComponent', () => {
  let component: PlcMitsubishiComponent;
  let fixture: ComponentFixture<PlcMitsubishiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlcMitsubishiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcMitsubishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
