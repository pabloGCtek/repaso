import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnParamMandaComponent } from './un-param-manda.component';

describe('UnParamMandaComponent', () => {
  let component: UnParamMandaComponent;
  let fixture: ComponentFixture<UnParamMandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnParamMandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnParamMandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
