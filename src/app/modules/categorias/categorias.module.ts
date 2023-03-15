import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { Route, RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


const categoriasRoutes:Route[] = [
    {
        path:'',
        component: CategoriasComponent
    }
]

@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoriasRoutes),
    ComponentsModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ]
})
export class CategoriasModule { }
