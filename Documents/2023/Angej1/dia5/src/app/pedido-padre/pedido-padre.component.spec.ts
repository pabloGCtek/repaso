import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPadreComponent } from './pedido-padre.component';

describe('PedidoPadreComponent', () => {
  let component: PedidoPadreComponent;
  let fixture: ComponentFixture<PedidoPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
