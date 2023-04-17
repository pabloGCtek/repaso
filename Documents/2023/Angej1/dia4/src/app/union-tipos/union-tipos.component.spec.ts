import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionTiposComponent } from './union-tipos.component';

describe('UnionTiposComponent', () => {
  let component: UnionTiposComponent;
  let fixture: ComponentFixture<UnionTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionTiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
