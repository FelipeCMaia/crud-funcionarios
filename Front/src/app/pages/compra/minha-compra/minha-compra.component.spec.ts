import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaCompraComponent } from './minha-compra.component';

describe('MinhaCompraComponent', () => {
  let component: MinhaCompraComponent;
  let fixture: ComponentFixture<MinhaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhaCompraComponent]
    });
    fixture = TestBed.createComponent(MinhaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
