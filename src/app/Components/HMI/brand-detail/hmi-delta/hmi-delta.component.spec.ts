import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmiDeltaComponent } from './hmi-delta.component';

describe('HmiDeltaComponent', () => {
  let component: HmiDeltaComponent;
  let fixture: ComponentFixture<HmiDeltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmiDeltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmiDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
