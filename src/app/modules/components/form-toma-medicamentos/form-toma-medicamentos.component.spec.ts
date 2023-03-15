import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTomaMedicamentosComponent } from './form-toma-medicamentos.component';

describe('FormTomaMedicamentosComponent', () => {
  let component: FormTomaMedicamentosComponent;
  let fixture: ComponentFixture<FormTomaMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTomaMedicamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTomaMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
