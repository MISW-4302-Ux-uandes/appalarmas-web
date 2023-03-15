import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { GroupFormComponent } from '../group-form/group-form.component';
import { FuseAlertService } from '../../../../@fuse/components/alert/alert.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-edit-form',
  templateUrl: './categoria-edit-form.component.html',
  styleUrls: ['./categoria-edit-form.component.scss']
})
export class CategoriaEditFormComponent {

  horizontalStepperForm: UntypedFormGroup;

  constructor(private _formBuilder:FormBuilder,
    public MatDialogRef: MatDialogRef<GroupFormComponent>,
    private _alertaService:FuseAlertService){}


  close(): void
  {
      // Close the dialog
      this.MatDialogRef.close();
  }

  save(){
      this._alertaService.show('aaaaaa')
      this.MatDialogRef.close();
  }

}
