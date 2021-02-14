import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { ToastrService } from 'ngx-toastr';
import {AddStaticFilesComponent} from '../add-static-files/add-static-files.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {

  policyName = '';
  policyFile;

  constructor(private policyService:PolicyService,public dialogRef:MatDialogRef<EditPolicyComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any,private routerBtn:Router,private toast:ToastrService) 
  {
    this.policyName = data.policyName;
    console.log(this.policyName);
  }

  ngOnInit(): void {
     
  }

  selectImage(event)
  {
    const file = event.target.files[0];
    this.policyFile = file;
    console.log("policy : ",this.policyFile);
  }

  onSubmit(form:NgForm)
  {
    // form.value.id = +form.value.id;
    // console.log(form.value.id)
    const formData = new FormData();   
    const id = '1';
    formData.append('id',id);
    formData.append('policyName',this.policyFile);
    console.log(formData);
    this.policyService.editPolicy(this.policyName,formData).subscribe(res=>{
      // console.log(res);
      if(res["status"])
      {
        // this.policyService.reloadPage(true);
      // let addFIleComp = new AddStaticFilesComponent(this.policyService,null);
      // addFIleComp.ngOnInit();
      this.toast.success("Policy Details Updated","Successs",{
        timeOut:2500,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-top-right'
      })
        this.closeModel();
       
      }
      else
      {
        this.toast.error("Details not updated....error occured","Error",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      }
    })

  }

  closeModel()
  {
    this.dialogRef.close();
  }


}
