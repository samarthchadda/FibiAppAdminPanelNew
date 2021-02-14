import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaloonsService } from '../services/saloons.service';

@Component({
  selector: 'app-saloon-services',
  templateUrl: './saloon-services.component.html',
  styleUrls: ['./saloon-services.component.css']
})
export class SaloonServicesComponent implements OnInit {

  idVal;

  services = [];

  constructor(private saloonService:SaloonsService,public dialogRef:MatDialogRef<SaloonServicesComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.idVal = data.saloonId;
    // console.log(this.idVal);
   }

  ngOnInit(): void {
    this.saloonService.getAllServicesBySaloon(+this.idVal).subscribe(res=>{
      this.services = res["data"];
      this.services.forEach(service=>{
        if(service.description == "")
        {
          service.description="#No Desc. Available#"
        }
      })

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
