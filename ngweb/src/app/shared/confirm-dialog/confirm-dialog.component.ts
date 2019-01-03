import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <form>
    <h2 mat-dialog-title>{{title}}</h2>
    <div class="mat-dialog-content">
      {{content}}
    </div>
    <div mat-dialog-actions>
      <button type="button" mat-raised-button color="primaty" (click)="onClick(true)">确定</button>
      <button type="button" mat-button mat-dialog-close (click)="onClick(false)">取消</button>
    </div>
  </form>
  `,
  styles: [`
  
  `]
})
export class ConfirmDialogComponent implements OnInit {

  title='';
  content='';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
  }
  onClick(result:boolean){
    this.dialogRef.close(result)
  }

}
