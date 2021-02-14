import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaloonsService } from '../services/saloons.service';

@Component({
  selector: 'app-saloon-detail',
  templateUrl: './saloon-detail.component.html',
  styleUrls: ['./saloon-detail.component.css']
})
export class SaloonDetailComponent implements OnInit {

  idVal;
  saloonData;

  constructor(private saloonService:SaloonsService,public dialogRef:MatDialogRef<SaloonDetailComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.idVal = data.saloonId;
    console.log(this.idVal);
  }

  ngOnInit(): void {
    this.saloonService.getSingleSaloon(+this.idVal).subscribe(res=>{
      this.saloonData = res["data"];
      console.log(this.saloonData)
    })
  }

  closeModel()
  {
    this.dialogRef.close();
  }


}
