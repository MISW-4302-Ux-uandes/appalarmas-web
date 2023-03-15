import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private _snackBar:MatSnackBar) { }

  showAlert(message: string, duration?:number,action?:string) {
    this._snackBar.open(message, action || 'ok', {
      duration: duration || 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'snackbar'
    }).afterDismissed().subscribe(r=>{

    });

  }
}
