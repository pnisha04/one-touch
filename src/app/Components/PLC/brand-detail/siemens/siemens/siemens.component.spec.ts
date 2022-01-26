import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiemensComponent } from './siemens.component';

describe('SiemensComponent', () => {
  let component: SiemensComponent;
  let fixture: ComponentFixture<SiemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiemensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
