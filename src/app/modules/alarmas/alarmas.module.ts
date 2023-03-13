import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const alarmasRoutes:Route[] = [
    {
        path:'',
        component: AlarmasComponent
    }
]

@NgModule({
  declarations: [
    AlarmasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(alarmasRoutes),
    SharedModule
  ]
})
export class AlarmasModule { }
