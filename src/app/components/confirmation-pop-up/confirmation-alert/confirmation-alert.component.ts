import { Component } from '@angular/core';
import {  Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation-alert',
  template: `
    <h1 mat-dialog-title>Delete Confirmation</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Yes</button>
    </div>
  `,
  styleUrls: ['./confirmation-alert.component.css']
})
export class ConfirmationAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
