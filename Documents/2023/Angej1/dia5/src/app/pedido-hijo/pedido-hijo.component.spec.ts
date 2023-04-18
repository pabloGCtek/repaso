import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoHijoComponent } from './pedido-hijo.component';

describe('PedidoHijoComponent', () => {
  let component: PedidoHijoComponent;
  let fixture: ComponentFixture<PedidoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
