import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisualizacaoComponent } from './page-visualizacao.component';

describe('PageVisualizacaoComponent', () => {
  let component: PageVisualizacaoComponent;
  let fixture: ComponentFixture<PageVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVisualizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
