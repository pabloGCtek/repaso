import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosParamMandaComponent } from './dos-param-manda.component';

describe('DosParamMandaComponent', () => {
  let component: DosParamMandaComponent;
  let fixture: ComponentFixture<DosParamMandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosParamMandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosParamMandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
