import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion1HijoComponent } from './comunicacion1-hijo.component';

describe('Comunicacion1HijoComponent', () => {
  let component: Comunicacion1HijoComponent;
  let fixture: ComponentFixture<Comunicacion1HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comunicacion1HijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comunicacion1HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
