import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLojaComponent } from './menu-loja.component';

describe('MenuLojaComponent', () => {
  let component: MenuLojaComponent;
  let fixture: ComponentFixture<MenuLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLojaComponent]
    });
    fixture = TestBed.createComponent(MenuLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
