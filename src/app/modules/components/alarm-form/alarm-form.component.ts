import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertasService } from 'app/services/alertas.service';

interface TipoAlarma{
    titulo:string;
    descripcion:string;
    id:number;
}


export interface UserList {
    name: string;
    position:number
  }

  const USER_DATA: UserList[] = [
    {position: 1, name: 'David Castro Gonzalez'},
    {position: 2, name: 'Nelson Barreto Pastrana'},
    {position: 3, name: 'Invitado Uniandes'},
  ];

  const GROUP_DATA: UserList[] = [
    {position: 1, name: 'Grupo 1'},
    {position: 2, name: 'Grupo 2'},
    {position: 3, name: 'Grupo 3'},
  ];

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {

    horizontalStepperForm: UntypedFormGroup;
    selectedTypeAlarm:number=-1;
    grupo:boolean=false;

    displayedColumns: string[] = ['position', 'name', 'select'];
    dataSourceContacts = new MatTableDataSource<UserList>(USER_DATA);
    dataSourceGroups = new MatTableDataSource<UserList>(GROUP_DATA);
    selection = new SelectionModel<UserList>(true, []);


    constructor(private _router: Router,
        private _formBuilder: UntypedFormBuilder,
        private alertasService:AlertasService){}

    tiposDeAlarmas:TipoAlarma[]=[
        {
            titulo:'Alarma Sencilla',
            descripcion:'Utilice esta alarma para actividades como despertase, ir al colegio por sus hijos o recordar la realización de una actividad',
            id:0
        },
        {
            titulo:'Cita médica',
            descripcion:'Utilice esta alarma para recordar una cita médica en la que podrá establecer la especialidad médica, el centro médico y otros datos relevantes.',
            id:1
        },
        {
            titulo:'Recordatorio rápido',
            descripcion:'Utilice esta alarma rápida para eventos esporádicos y no muy prolongados en el tiempo; como realizar una llamada, recordar una reunión urgente, etc. ',
            id:2
        },
        {
            titulo:'Toma medicamentos',
            descripcion:'Utilice esta alarma para recordar la toma de un medicamente y su dosificación. Especialmente útil si debe tomar varios medicamentos',
            id:3
        }
    ];

    descartar(){
        this._router.navigateByUrl('/Alarmas')
    }

    ngOnInit(){
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                para   : ['yoMismo', [Validators.required]],

            }),
            step2: this._formBuilder.group({
                tipoAlarma: ['', ],

            }),
            step3: this._formBuilder.group({
                byEmail          : this._formBuilder.group({
                    companyNews     : [true],
                    featuredProducts: [false],
                    messages        : [true]
                }),

            })
        });
    }

    selectType(id:number){
        this.selectedTypeAlarm=id;
    }

    handleRadioButton(event:any){
        if(event=='yoMismo'){
            this.grupo = false
        }else{
            this.grupo = true
        }
    }


       /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceContacts.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSourceContacts.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  guardar(){
    this.alertasService.showAlert('Alarma creada correctamente')
    this._router.navigateByUrl('/Alarmas');
  }
}
