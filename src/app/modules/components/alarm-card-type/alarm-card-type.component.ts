import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alarm-card-type',
  templateUrl: './alarm-card-type.component.html',
  styleUrls: ['./alarm-card-type.component.scss']
})
export class AlarmCardTypeComponent {
    @Input() titulo:string='';
    @Input() descripcion:string='';
    selectedType:boolean=false

    selected(type:string){
        console.log('type: ',type)
        this.selectedType = true;
    }
}
