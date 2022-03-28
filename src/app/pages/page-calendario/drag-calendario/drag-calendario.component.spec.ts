import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCalendarioComponent } from './drag-calendario.component';

describe('DragCalendarioComponent', () => {
  let component: DragCalendarioComponent;
  let fixture: ComponentFixture<DragCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
