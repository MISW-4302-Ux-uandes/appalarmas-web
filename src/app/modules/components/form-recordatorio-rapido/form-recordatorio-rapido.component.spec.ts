import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecordatorioRapidoComponent } from './form-recordatorio-rapido.component';

describe('FormRecordatorioRapidoComponent', () => {
  let component: FormRecordatorioRapidoComponent;
  let fixture: ComponentFixture<FormRecordatorioRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecordatorioRapidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecordatorioRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
