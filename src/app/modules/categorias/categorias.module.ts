import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { Route, RouterModule } from '@angular/router';

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
    RouterModule.forChild(categoriasRoutes)
  ]
})
export class CategoriasModule { }
