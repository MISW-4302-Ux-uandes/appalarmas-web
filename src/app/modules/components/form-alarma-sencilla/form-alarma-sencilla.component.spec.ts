import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlarmaSencillaComponent } from './form-alarma-sencilla.component';

describe('FormAlarmaSencillaComponent', () => {
  let component: FormAlarmaSencillaComponent;
  let fixture: ComponentFixture<FormAlarmaSencillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlarmaSencillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlarmaSencillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
