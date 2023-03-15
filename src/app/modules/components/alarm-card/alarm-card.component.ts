import { Component, Input } from '@angular/core';

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

    activar(event:any){

    }
}
