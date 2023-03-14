import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface TipoAlarma{
    titulo:string;
    descripcion:string
}

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {

    horizontalStepperForm: UntypedFormGroup;
    constructor(private _router: Router,private _formBuilder: UntypedFormBuilder){}

    tiposDeAlarmas:TipoAlarma[]=[
        {
            titulo:'Alarma Sencilla',
            descripcion:'Utilice esta alarma para actividades como despertase, ir al colegio por sus hijos o recordar la realización de una actividad'
        },
        {
            titulo:'Cita médica',
            descripcion:'Utilice esta alarma para recordar una cita médica en la que podrá establecer la especialidad médica, el centro médico y otros datos relevantes.'
        },
        {
            titulo:'Recordatorio rápido',
            descripcion:'Utilice esta alarma rápida para eventos esporádicos y no muy prolongados en el tiempo; como realizar una llamada, recordar una reunión urgente, etc. '
        },
        {
            titulo:'Toma medicamentos',
            descripcion:'Utilice esta alarma para recordar la toma de un medicamente y su dosificación. Especialmente útil si debe tomar varios medicamentos'
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
}
