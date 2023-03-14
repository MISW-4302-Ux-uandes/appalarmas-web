import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesCalificacionComponent } from './ajustes-calificacion.component';

describe('AjustesCalificacionComponent', () => {
  let component: AjustesCalificacionComponent;
  let fixture: ComponentFixture<AjustesCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesCalificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustesCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
