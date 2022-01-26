import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchinederComponent } from './schineder.component';

describe('SchinederComponent', () => {
  let component: SchinederComponent;
  let fixture: ComponentFixture<SchinederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchinederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchinederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
