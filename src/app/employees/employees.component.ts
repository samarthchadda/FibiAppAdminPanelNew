import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaloonsService } from '../services/saloons.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  idVal;

  employees = [];

  constructor(private saloonService:SaloonsService,public dialogRef:MatDialogRef<EmployeesComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.idVal = data.saloonId;
    console.log(this.idVal);
   }

  ngOnInit(): void {
    this.saloonService.getAllEmpBySaloon(+this.idVal).subscribe(res=>{
      this.employees = res["data"];
      console.log(this.employees)

    })
  }

  actionFunc()
  {
    alert("You have logged out"); 
    this.closeModel();
  }

  closeModel()
  {
    this.dialogRef.close();
  }


}
