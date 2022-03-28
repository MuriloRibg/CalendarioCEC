import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisciplinasComponent } from './page-disciplinas.component';

describe('PageDisciplinasComponent', () => {
  let component: PageDisciplinasComponent;
  let fixture: ComponentFixture<PageDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
