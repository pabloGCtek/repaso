import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnParamRecibeComponent } from './un-param-recibe.component';

describe('UnParamRecibeComponent', () => {
  let component: UnParamRecibeComponent;
  let fixture: ComponentFixture<UnParamRecibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnParamRecibeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnParamRecibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
