import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaFormComponent } from '../components/categoria-form/categoria-form.component';
import { FuseConfirmationService } from '../../../@fuse/services/confirmation/confirmation.service';
import { CategoriaEditFormComponent } from '../components/categoria-edit-form/categoria-edit-form.component';
import { AlertasService } from 'app/services/alertas.service';

interface Categoria{
    color:string;
    titulo:string;
    alarmas:string
}
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
    panelOpenState = false;

    categorias:Categoria[]=[
        {
            color:'red',
            titulo:"Citas médicas",
            alarmas:'3'
        },
        {
            color:'purple',
            titulo:"Toma medicamentos",
            alarmas:'1'
        },
        {
            color:'blue',
            titulo:"Recordatorio rápido",
            alarmas:'Sin alarmas'
        },
        {
            color:'green',
            titulo:"Alarma Sencilla",
            alarmas:'Sin alarmas'
        },
    ]

    constructor(private _matDialog: MatDialog,
        private _fuseConfirmationService: FuseConfirmationService,
        private alertasService:AlertasService){}

    abrirFormCrearCategoria(){

      const dialogRef = this._matDialog.open(CategoriaFormComponent);

      dialogRef.afterClosed()
                .subscribe((result) => {
                    console.log('Compose dialog was closed!');
                });

    }

    abrirFormEditarCategoria(texto:string){
      const dialogRef = this._matDialog.open(CategoriaEditFormComponent);
      dialogRef.afterClosed()
                .subscribe((result) => {
                    console.log('Compose dialog was closed!');
                });

    }

    deleteCat(texto:string){
      const confirmation = this._fuseConfirmationService.open({
        title  : 'Eliminar categoría',
        message: '¿Seguro que desea borrar la categoría ' + texto +' ?',
        actions: {
            confirm: {
                label: 'Eliminar'
            },
            cancel:{
                label:'Cancelar'
            }
        }
    });


    confirmation.afterClosed().subscribe((result) => {
      if ( result === 'confirmed' )
      {
        this.alertasService.showAlert('Categoría eliminada')
      }
      });


    }

}
