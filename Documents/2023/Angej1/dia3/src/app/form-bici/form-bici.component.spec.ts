import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBiciComponent } from './form-bici.component';

describe('FormBiciComponent', () => {
  let component: FormBiciComponent;
  let fixture: ComponentFixture<FormBiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBiciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
