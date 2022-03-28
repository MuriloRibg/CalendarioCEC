import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInstrutoresComponent } from './page-instrutores.component';

describe('PageInstrutoresComponent', () => {
  let component: PageInstrutoresComponent;
  let fixture: ComponentFixture<PageInstrutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInstrutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInstrutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
