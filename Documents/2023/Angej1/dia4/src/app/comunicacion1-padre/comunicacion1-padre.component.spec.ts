import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion1PadreComponent } from './comunicacion1-padre.component';

describe('Comunicacion1PadreComponent', () => {
  let component: Comunicacion1PadreComponent;
  let fixture: ComponentFixture<Comunicacion1PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comunicacion1PadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comunicacion1PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
