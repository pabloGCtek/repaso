import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosParamRecibeComponent } from './dos-param-recibe.component';

describe('DosParamRecibeComponent', () => {
  let component: DosParamRecibeComponent;
  let fixture: ComponentFixture<DosParamRecibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosParamRecibeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosParamRecibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
