import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FuseAlertService } from '@fuse/components/alert';

export interface PeriodicElement {
    name: string;
    position:number
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'David Castro Gonzalez'},
    {position: 2, name: 'Nelson Barreto Pastrana'},
    {position: 3, name: 'Lithium'},
    {position: 4, name: 'Beryllium'},
    {position: 5, name: 'Boron'},
    {position: 6, name: 'Carbon'},
    {position: 7, name: 'Nitrogen'},
    {position: 8, name: 'Oxygen'},
    {position: 9, name: 'Fluorine'},
    {position: 10, name: 'Neon'},
  ];

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'select'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    horizontalStepperForm: UntypedFormGroup;

    constructor(private _formBuilder:FormBuilder,
                public matDialogRef: MatDialogRef<GroupFormComponent>,
                private _alertaService:FuseAlertService){}
    ngOnInit(): void
    {
        // Create the form
        this.horizontalStepperForm = this._formBuilder.group({
            step1:this._formBuilder.group({

            }),
            step2:this._formBuilder.group({
                nombre:['',Validators.required]
            }),
            step3:this._formBuilder.group({

            })
        });
    }

    close(): void
    {
        // Close the dialog
        this.matDialogRef.close();
    }

    save(){
        this._alertaService.show('')
        this.matDialogRef.close();
    }


    /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
