import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmiSchneiderComponent } from './hmi-schneider.component';

describe('HmiSchneiderComponent', () => {
  let component: HmiSchneiderComponent;
  let fixture: ComponentFixture<HmiSchneiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmiSchneiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmiSchneiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
