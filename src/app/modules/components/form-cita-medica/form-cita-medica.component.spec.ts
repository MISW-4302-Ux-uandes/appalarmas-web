import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitaMedicaComponent } from './form-cita-medica.component';

describe('FormCitaMedicaComponent', () => {
  let component: FormCitaMedicaComponent;
  let fixture: ComponentFixture<FormCitaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCitaMedicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCitaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
