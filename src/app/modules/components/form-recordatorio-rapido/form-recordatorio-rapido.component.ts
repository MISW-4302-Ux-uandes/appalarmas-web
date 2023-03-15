import { Component } from '@angular/core';

@Component({
  selector: 'app-form-recordatorio-rapido',
  templateUrl: './form-recordatorio-rapido.component.html',
  styleUrls: ['./form-recordatorio-rapido.component.scss']
})
export class FormRecordatorioRapidoComponent {
    tiempoTotal:number=0;

    sumarTiempo(tiempo:number){
        this.tiempoTotal=this.tiempoTotal+tiempo;
    }
}
