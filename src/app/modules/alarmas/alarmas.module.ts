import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas.component';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(alarmasRoutes)
  ]
})
export class AlarmasModule { }
