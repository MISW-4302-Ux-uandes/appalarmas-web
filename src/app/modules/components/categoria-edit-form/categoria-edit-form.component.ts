import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { GroupFormComponent } from '../group-form/group-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertasService } from 'app/services/alertas.service';

@Component({
  selector: 'app-categoria-edit-form',
  templateUrl: './categoria-edit-form.component.html',
  styleUrls: ['./categoria-edit-form.component.scss']
})
export class CategoriaEditFormComponent {

  horizontalStepperForm: UntypedFormGroup;

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
      this.alertasService.showAlert('Categoría actualizada correctamente');
  }

}
