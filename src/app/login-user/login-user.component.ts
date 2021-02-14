import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component'; 

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private toast:ToastrService,public matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  email = '';
  
  onSubmit(form:NgForm)
  {
     
      this.authService.loginUser(form.value).subscribe(res=>{
        if(res["status"])
        {
          console.log(form.value);
          this.toast.success("Welcome Back!!",res["message"],{
            timeOut:2500,
            progressBar:true,
            progressAnimation:'increasing',
            positionClass:'toast-top-right'
          })
          localStorage.setItem('authUserData',JSON.stringify(res["admin"]))
          this.authService.loggedIn.next(true);
         this.router.navigate(['/dashboard']);
        }
        else
        {
          this.toast.error(res["message"],"Error",{
            timeOut:2500,
            progressBar:true,
            progressAnimation:'increasing',
            positionClass:'toast-top-right'
          })
        }
      })
     
   
  }

  openModalForgotPwd()
  {
    if(this.email==null|| this.email=='')
    {
      this.toast.error("Enter Email!!","Error",{
        timeOut:2500,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-top-right'
      })
    }
    else
    {
      this.authService.sendToken({email:this.email}).subscribe(res=>{
          if(res["status"])
          {
            const dialogConfig = new MatDialogConfig();
            //if the user clicks outside the modal, it doesn’t close
            dialogConfig.disableClose = true;
            dialogConfig.id = 'forgotPwd-component';
            dialogConfig.height = "550px";
            dialogConfig.width = "750px";
            //passing data
           
            dialogConfig.data = {email:this.email}
            
            const modalDialog = this.matDialog.open(ForgotPasswordComponent,dialogConfig);
         
          }
      },err=>{
        this.toast.error(err,"Error Occured",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      })
     
    }
   
  }

}
