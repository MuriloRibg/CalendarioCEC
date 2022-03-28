import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalendarioComponent } from './page-calendario.component';

describe('PageCalendarioComponent', () => {
  let component: PageCalendarioComponent;
  let fixture: ComponentFixture<PageCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
