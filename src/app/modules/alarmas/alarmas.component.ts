import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupFormComponent } from '../components/group-form/group-form.component';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss']
})
export class AlarmasComponent {

    constructor(private _matDialog: MatDialog){}
    abrirFormCrearGrupo(){
        // Open the dialog
        const dialogRef = this._matDialog.open(GroupFormComponent);

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log('Compose dialog was closed!');
            });
        }

}
