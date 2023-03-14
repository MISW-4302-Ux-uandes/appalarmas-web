import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesComponent } from './ajustes.component';
import { Route, RouterModule } from '@angular/router';
import { AjustesPerfilComponent } from './ajustes-perfil/ajustes-perfil.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { FuseAlertModule } from '../../../@fuse/components/alert/alert.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AjustesSonidoComponent } from './ajustes-sonido/ajustes-sonido.component';
import { AjustesTemaComponent } from './ajustes-tema/ajustes-tema.component';
import { AjustesCalificacionComponent } from './ajustes-calificacion/ajustes-calificacion.component';
import {MatSliderModule} from '@angular/material/slider'; 

const ajustesRoutes:Route[] = [
    {
        path:'',
        component:AjustesComponent
    }
]

@NgModule({
  declarations: [
    AjustesComponent,
    AjustesPerfilComponent,
    AjustesSonidoComponent,
    AjustesTemaComponent,
    AjustesCalificacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ajustesRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FuseAlertModule,
    SharedModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule

  ]
})
export class AjustesModule { }
