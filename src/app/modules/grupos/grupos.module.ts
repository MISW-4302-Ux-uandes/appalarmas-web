import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GruposComponent } from './grupos.component';

const gruposRoutes:Route[] = [
    {
        path:'',
        component:GruposComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(gruposRoutes)
  ]
})
export class GruposModule { }
