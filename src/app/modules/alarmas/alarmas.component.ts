import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupFormComponent } from '../components/group-form/group-form.component';

interface Alarma{
    titulo:string;
    categoria:string;
    fecha:string;
    activo:boolean
}
@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss']
})
export class AlarmasComponent {

    alarmas:Alarma[]=[
        {
            titulo: "Entrega Ux",
            categoria:"Recordatorio rápido",
            fecha:"11:59 2023-03-15",
            activo: true
        },
        {
            titulo: "Parcial Nube",
            categoria:"Alarma sencilla",
            fecha:"11:59 2023-03-22",
            activo: true
        },
        {
            titulo: "Odontología",
            categoria:"Cita médica",
            fecha:"09:20 2023-04-22",
            activo: true
        },
        {
            titulo: "Trabajo",
            categoria:"Alarma Sencilla",
            fecha:"13:00 2023-03-22",
            activo: true
        },
        {
            titulo: "Hipertensión",
            categoria:"Toma medicamentos",
            fecha:"09:20 2023-04-22",
            activo: true
        },
        {
            titulo: "Reunion Sprint",
            categoria:"Recordatorio rápido",
            fecha:"15:15 2023-03-24",
            activo: true
        },
        {
            titulo: "Cita Daniel",
            categoria:"Cita médica",
            fecha:"08:20 2023-03-22",
            activo: true
        }
    ]

    alarmasInactivas:Alarma[]=[
        {
            titulo: "Odontología",
            categoria:"Cita médica",
            fecha:"09:20 2023-04-22",
            activo: false
        },
        {
            titulo: "Trabajo",
            categoria:"Alarma Sencilla",
            fecha:"13:00 2023-03-22",
            activo: false
        },
        {
            titulo: "Hipertensión",
            categoria:"Toma medicamentos",
            fecha:"09:20 2023-04-22",
            activo: false
        },
        {
            titulo: "Reunion Sprint",
            categoria:"Recordatorio rápido",
            fecha:"15:15 2023-03-24",
            activo: false
        },
        {
            titulo: "Cita Daniel",
            categoria:"Cita médica",
            fecha:"08:20 2023-03-22",
            activo: false
        }
    ]

    alarmasHoy:Alarma[]=[
        {
            titulo: "Entrega Ux",
            categoria:"Recordatorio rápido",
            fecha:"11:59 2023-03-15",
            activo: true
        },]

    alarmasProximas:Alarma[]=[
        {
            titulo: "Hipertensión",
            categoria:"Toma medicamentos",
            fecha:"09:20 2023-03-18",
            activo: true
        },
        {
            titulo: "Parcial Nube",
            categoria:"Alarma sencilla",
            fecha:"11:59 2023-03-22",
            activo: true
        },

        {
            titulo: "Reunion Sprint",
            categoria:"Recordatorio rápido",
            fecha:"15:15 2023-03-24",
            activo: true
        },
        {
            titulo: "Odontología",
            categoria:"Cita médica",
            fecha:"09:20 2023-04-22",
            activo: true
        },
        {
            titulo: "Trabajo",
            categoria:"Alarma Sencilla",
            fecha:"13:00 2023-04-23",
            activo: true
        },

    ]
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
