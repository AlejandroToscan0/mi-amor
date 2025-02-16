import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina11Component } from './pagina11.component';

describe('Pagina11Component', () => {
  let component: Pagina11Component;
  let fixture: ComponentFixture<Pagina11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
