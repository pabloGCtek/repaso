import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion2PadreComponent } from './comunicacion2-padre.component';

describe('Comunicacion2PadreComponent', () => {
  let component: Comunicacion2PadreComponent;
  let fixture: ComponentFixture<Comunicacion2PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comunicacion2PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comunicacion2PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
