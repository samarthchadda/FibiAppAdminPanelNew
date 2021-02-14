import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SaloonsService } from '../services/saloons.service';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import {EmployeesComponent} from '../employees/employees.component'; 
import {SaloonServicesComponent} from '../saloon-services/saloon-services.component'; 
import { OwnersService } from '../services/owners.service';
declare var $: any;


//to install angular material--
//ng add @angular/material


@Component({
  selector: 'app-saloons',
  templateUrl: './saloons.component.html',
  styleUrls: ['./saloons.component.css']
})
export class SaloonsComponent implements OnInit {

  saloons = [];
  saloonName;
  filteredStatus = '';
  key='saloonName';
  reverse:boolean = false;

  p:number =1;

  constructor(private saloonService:SaloonsService,private ownerService:OwnersService, private routerBtn:Router,public matDialog:MatDialog) { }

  ngOnInit(): void {

    this.saloonService.getAllSaloons().subscribe(res=>{
     
      res['allSaloons'].forEach(saloon=>{
       
        this.ownerService.getOwnerById(+saloon.ownerId).subscribe(resOwner=>{
          saloon.ownerName = resOwner["user"].ownerName;
        })

      });

      setTimeout(()=>{
        this.saloons = res["allSaloons"];      
        console.log(this.saloons);
      },500)
     

    },err=>{
      console.log("Error Occured")
    })

  }

  Search()
  {
    if(this.saloonName=="")
    {
      this.ngOnInit();
    }
    else{
      console.log("filter : ",this.saloons);
      this.saloons = this.saloons.filter(res=>{
        // return res.saloonName.toLowerCase().match(this.saloonName.toLowerCase())
        
        //to search from both saloonname and ownername
        return res.saloonName.toLowerCase().match(this.saloonName.toLowerCase()) || res.ownerName.toLowerCase().match(this.saloonName.toLowerCase())
      })
    }
  }

  sort(key)
  {
    this.key = key;

    this.reverse = !this.reverse;

  }
  

  openModal(id)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'employees-component';
    dialogConfig.height = "550px";
    dialogConfig.width = "850px";
    //passing data
    dialogConfig.data = {saloonId:id}
    
    const modalDialog = this.matDialog.open(EmployeesComponent,dialogConfig);
    

  }

  openModalServices(id)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'services-component';
    dialogConfig.height = "550px";
    dialogConfig.width = "850px";
    //passing data
    dialogConfig.data = {saloonId:id}
    
    const modalDialog = this.matDialog.open(SaloonServicesComponent,dialogConfig);
  }

}
