import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GruposComponent } from './grupos.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from 'app/shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

const gruposRoutes:Route[] = [
    {
        path:'',
        component:GruposComponent
    }
]

@NgModule({
  declarations: [GruposComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(gruposRoutes),
    ComponentsModule,
    SharedModule,
    MatExpansionModule,
    MatListModule

  ]
})
export class GruposModule { }
