import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina12Component } from './pagina12.component';

describe('Pagina12Component', () => {
  let component: Pagina12Component;
  let fixture: ComponentFixture<Pagina12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
