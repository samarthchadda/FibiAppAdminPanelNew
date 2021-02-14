import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  report;

  constructor(public dialogRef:MatDialogRef<ReportDetailComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) 
  { 
    this.report = data.report;
    console.log(this.report);
  }

  ngOnInit(): void {
  }

  closeModel()
  {
    this.dialogRef.close();
  }
}
