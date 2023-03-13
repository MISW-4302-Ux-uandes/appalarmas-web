import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AlarmCardComponent } from './alarm-card/alarm-card.component';



@NgModule({
  declarations: [AlarmCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AlarmCardComponent
  ]
})
export class ComponentsModule { }
