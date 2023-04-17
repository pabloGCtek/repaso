import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion2HijoComponent } from './comunicacion2-hijo.component';

describe('Comunicacion2HijoComponent', () => {
  let component: Comunicacion2HijoComponent;
  let fixture: ComponentFixture<Comunicacion2HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comunicacion2HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comunicacion2HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
