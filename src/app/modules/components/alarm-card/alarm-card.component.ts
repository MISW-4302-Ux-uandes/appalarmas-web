import { Component, Input } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { AlertasService } from 'app/services/alertas.service';

@Component({
  selector: 'app-alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss']
})
export class AlarmCardComponent {
    @Input() categoria:string='';
    @Input() titulo:string='';
    @Input() fecha:string='';
    @Input() activo:boolean=false;


    constructor(private _fuseConfirmationService:FuseConfirmationService,
                private alertasService:AlertasService){}
    activar(event:any){
        if(!event){
            const confirmDeleteAlarm = this._fuseConfirmationService.open({
                title  : 'Desactivar alarma',
                message: '¿Seguro que desea desactivar esta alarma?',
                actions: {
                    confirm: {
                        label: 'Descativar'
                    },
                    cancel:{
                        label:'Cancelar'
                    }
                }
            });

            confirmDeleteAlarm.afterClosed().subscribe((result) => {
                if ( result === 'confirmed' )
                {
                  this.alertasService.showAlert('Alarma desactivada')
                }
                });
        }

    }
}
