import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AlarmCardComponent } from './alarm-card/alarm-card.component';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlarmCardTypeComponent } from './alarm-card-type/alarm-card-type.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { FuseAlertModule } from '@fuse/components/alert';
import { FormAlarmaSencillaComponent } from './form-alarma-sencilla/form-alarma-sencilla.component';
import { FormCitaMedicaComponent } from './form-cita-medica/form-cita-medica.component';
import { FormRecordatorioRapidoComponent } from './form-recordatorio-rapido/form-recordatorio-rapido.component';
import { FormTomaMedicamentosComponent } from './form-toma-medicamentos/form-toma-medicamentos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [AlarmCardComponent, AlarmFormComponent, AlarmCardTypeComponent, GroupFormComponent, FormAlarmaSencillaComponent, FormCitaMedicaComponent, FormRecordatorioRapidoComponent, FormTomaMedicamentosComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatMenuModule,
    FuseAlertModule,
    MatDividerModule,
    MatDatepickerModule,
    MatLuxonDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule

  ],
  exports:[
    AlarmCardComponent,
    AlarmFormComponent,
    AlarmCardTypeComponent,
    FormAlarmaSencillaComponent
  ],
  providers:[MatDatepickerModule]
})
export class ComponentsModule { }
