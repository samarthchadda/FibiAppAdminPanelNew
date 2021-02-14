import { Component, Inject, OnInit, Optional } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email;
  constructor(private authService:AuthService,public dialogRef:MatDialogRef<ForgotPasswordComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any,private toast :ToastrService) 
  {
    this.email = data.email;
    console.log(this.email);
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.authService.adminForgotPwd({email:this.email,newPassword:form.value.newPassword,token:form.value.token}).subscribe(res=>{
        if(res["status"])
        {
          this.toast.success(res["message"],"Success",{
            timeOut:2500,
            progressBar:true,
            progressAnimation:'increasing',
            positionClass:'toast-top-right'
          })
          this.dialogRef.close();
        }
        else
        {
          this.toast.error(res["message"],"Error Occured",{
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
