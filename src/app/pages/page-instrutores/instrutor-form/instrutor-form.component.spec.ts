import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrutorFormComponent } from './instrutor-form.component';

describe('AddFormComponent', () => {
  let component: InstrutorFormComponent;
  let fixture: ComponentFixture<InstrutorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrutorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
