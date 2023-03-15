import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaFormComponent } from '../components/categoria-form/categoria-form.component';
import { FuseConfirmationService } from '../../../@fuse/services/confirmation/confirmation.service';
import { CategoriaEditFormComponent } from '../components/categoria-edit-form/categoria-edit-form.component';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  panelOpenState = false;


    constructor(private _matDialog: MatDialog, private _fuseConfirmationService: FuseConfirmationService){}

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
        title  : 'Borrar categoría',
        message: 'Realmente desea borrar: ' + texto,
        actions: {
            confirm: {
                label: 'Eliminar'
            }
        }
    });

    
    confirmation.afterClosed().subscribe((result) => {
      if ( result === 'confirmed' )
      {
        console.log('Categoría eliminada')
      }
      });

    
    }

}
