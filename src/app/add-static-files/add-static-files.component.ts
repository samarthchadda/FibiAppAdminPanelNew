import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import {EditPolicyComponent} from '../edit-policy/edit-policy.component'; 

@Component({
  selector: 'app-add-static-files',
  templateUrl: './add-static-files.component.html',
  styleUrls: ['./add-static-files.component.css']
})
export class AddStaticFilesComponent implements OnInit {

  policies = [];

  constructor(private policyService:PolicyService,public matDialog:MatDialog) { 
   
  }

  ngOnInit(): void {
   
    this.policyService.getAllPolicies().subscribe(res=>{
      this.policies = res["policies"];
      console.log(this.policies[0])
      
    })
  }

  reloadPage()
  {
    this.ngOnInit();
  }


  openModal(policyName)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'edit-policy-component';
    dialogConfig.height = "250px";
    dialogConfig.width = "650px";
    //passing data
    dialogConfig.data = {policyName:policyName}
    
    const modalDialog = this.matDialog.open(EditPolicyComponent,dialogConfig);    

  }


}
