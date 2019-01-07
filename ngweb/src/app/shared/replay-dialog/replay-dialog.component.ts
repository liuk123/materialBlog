import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-replay-dialog',
  templateUrl: './replay-dialog.component.html',
  styleUrls: ['./replay-dialog.component.scss']
})
export class ReplayDialogComponent implements  OnInit{

  content: string
  title: string
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ReplayDialogComponent>,
  ){}

  ngOnInit(){
    this.content = this.data.content
    this.title = this.data.title
  }

  onClick(v){
    this.dialogRef.close(v.data)
  }
}
