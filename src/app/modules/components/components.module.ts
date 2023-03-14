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

@NgModule({
  declarations: [AlarmCardComponent, AlarmFormComponent, AlarmCardTypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    MatMenuModule,
  ],
  exports:[
    AlarmCardComponent,
    AlarmFormComponent,
    AlarmCardTypeComponent
  ]
})
export class ComponentsModule { }
