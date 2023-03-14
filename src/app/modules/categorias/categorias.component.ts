import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  panelOpenState = false;


    constructor(private _matDialog: MatDialog,){}

    abrirFormCrearGrupo(){
    /*
    const dialogRef = this._matDialog.open(GroupFormComponent);

    dialogRef.afterClosed()
                .subscribe((result) => {
                    console.log('Compose dialog was closed!');
                });
                */
    }

}
