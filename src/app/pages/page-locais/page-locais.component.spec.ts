import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocaisComponent } from './page-locais.component';

describe('PageLocaisComponent', () => {
  let component: PageLocaisComponent;
  let fixture: ComponentFixture<PageLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
