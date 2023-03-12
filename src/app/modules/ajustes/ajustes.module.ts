import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesComponent } from './ajustes.component';
import { Route, RouterModule } from '@angular/router';

const ajustesRoutes:Route[] = [
    {
        path:'',
        component:AjustesComponent
    }
]

@NgModule({
  declarations: [
    AjustesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ajustesRoutes)
  ]
})
export class AjustesModule { }
