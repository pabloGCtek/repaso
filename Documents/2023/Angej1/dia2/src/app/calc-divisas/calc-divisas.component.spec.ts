import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDivisasComponent } from './calc-divisas.component';

describe('CalcDivisasComponent', () => {
  let component: CalcDivisasComponent;
  let fixture: ComponentFixture<CalcDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcDivisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
