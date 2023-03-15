import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { GroupFormComponent } from '../group-form/group-form.component';
import { FuseAlertService } from '../../../../@fuse/components/alert/alert.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {

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
