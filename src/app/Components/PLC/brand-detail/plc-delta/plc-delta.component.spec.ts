import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcDeltaComponent } from './plc-delta.component';

describe('PlcDeltaComponent', () => {
  let component: PlcDeltaComponent;
  let fixture: ComponentFixture<PlcDeltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlcDeltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
