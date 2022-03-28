import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTurmasComponent } from './page-turmas.component';

describe('PageTurmasComponent', () => {
  let component: PageTurmasComponent;
  let fixture: ComponentFixture<PageTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTurmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
