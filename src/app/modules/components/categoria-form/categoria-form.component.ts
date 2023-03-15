import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GroupFormComponent } from '../group-form/group-form.component';

import { MatDialogRef } from '@angular/material/dialog';
import { AlertasService } from 'app/services/alertas.service';



@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {


  constructor(private _formBuilder:FormBuilder,
            public MatDialogRef: MatDialogRef<GroupFormComponent>,
            private alertasService:AlertasService){}


  close(): void
  {
      // Close the dialog
      this.MatDialogRef.close();
  }

  save(){

      this.MatDialogRef.close();
      this.alertasService.showAlert('Categoría creada correctamente')
  }



}
