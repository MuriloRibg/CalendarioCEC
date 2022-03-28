import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioEventInfoComponent } from './calendario-event-info.component';

describe('CalendarioEventInfoComponent', () => {
  let component: CalendarioEventInfoComponent;
  let fixture: ComponentFixture<CalendarioEventInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioEventInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
