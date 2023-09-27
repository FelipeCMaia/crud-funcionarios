import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListarLojaComponent } from './produto-listar-loja.component';

describe('ProdutoListarLojaComponent', () => {
  let component: ProdutoListarLojaComponent;
  let fixture: ComponentFixture<ProdutoListarLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoListarLojaComponent]
    });
    fixture = TestBed.createComponent(ProdutoListarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
