import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../services/client.service';
import { MessagingService } from '../services/messaging.service';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  defaultUser = 'owner';
  allOwners = [];

  constructor(private ownerService:OwnersService,private clientService:ClientService,private messagingService:MessagingService,private toast:ToastrService) { }

  ngOnInit(): void {
  }

  //for firebase notifications
  errorNotifications = [];
  errorNotifications1 = [];
  
  
  // onSubmit(form:NgForm)
  // {
  //  var allSuccess = 1;
  // //  localStorage.setItem("errorNotification",null)
  //   // console.log(form.value);
  //   if(form.value.userType=="owner")
  //   {
  //     this.ownerService.getAllOwners().subscribe(res=>{
  //       // console.log(res["allOwners"])

  //       res["allOwners"].forEach(owner=>{
  //         this.messagingService.sendNotification(form.value.title,form.value.message,owner.deviceToken).subscribe(resToken=>{
  //           console.log(resToken["success"])
  //           if(resToken["success"]==0)
  //           {
  //             allSuccess = 0;
  //             this.errorNotifications.push(owner);
  //             localStorage.setItem("errorNotification",JSON.stringify(this.errorNotifications));
  //             // console.log(errorNotifications)
  //             return false;

  //           }
  //         })
        
  //       })
  //       setTimeout(()=>{
  //         console.log(JSON.parse(localStorage.getItem("errorNotification")));
     
  //         if(JSON.parse(localStorage.getItem("errorNotification"))==null)
  //         {
  //           this.toast.success("Notifications sent to all clients","Success",{
  //             timeOut:2500,
  //             progressBar:true,
  //             progressAnimation:'increasing',
  //             positionClass:'toast-top-right'
  //           })
  //         }
  //         else{
  //         if(JSON.parse(localStorage.getItem("errorNotification")).length>0)
  //         {
  //           this.toast.error("Notifications not sent to some clients","Error",{
  //             timeOut:2500,
  //             progressBar:true,
  //             progressAnimation:'increasing',
  //             positionClass:'toast-top-right'
  //           })
  
  //           localStorage.setItem("errorNotification",null)
  //         }
  //       }
  //       },800)   
      
  //     })    
  //   }    
  // }
  

  //for one signal notification(IOS)
  onSubmit(form:NgForm)
  {
   var allSuccess = 1;
  //  localStorage.setItem("errorNotification",null)
    // console.log(form.value);
    if(form.value.userType=="owner")
    {
      this.ownerService.getAllOwners().subscribe(res=>{
        // console.log(res["allOwners"])

        res["allOwners"].forEach(owner=>{
          this.messagingService.sendIosNotification(form.value.title,form.value.message,owner.deviceToken).subscribe(resToken=>{
            console.log("RESPONSE TOKEN :",resToken)
          
          },err=>{
            console.log("Error Occured",err)
            this.errorNotifications.push(owner);
            localStorage.setItem("errorNotification",JSON.stringify(this.errorNotifications));
          })
        
        })
        
           setTimeout(()=>{
          console.log(JSON.parse(localStorage.getItem("errorNotification")));
     
          if(JSON.parse(localStorage.getItem("errorNotification"))==null)
          {
            this.toast.success("Notifications sent to all Owners","Success",{
              timeOut:2500,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass:'toast-top-right'
            })
          }
          else{
          if(JSON.parse(localStorage.getItem("errorNotification")).length>0)
          {
            this.toast.error("Notifications not sent to some owners","Error",{
              timeOut:2500,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass:'toast-top-right'
            })
  
            localStorage.setItem("errorNotification",null)
          }
        }
        },800)   
      
      })    
    }   
    else{
      this.clientService.getAllClients().subscribe(res=>{
        // console.log(res["allOwners"])

        res["allClients"].forEach(client=>{
          this.messagingService.sendIosNotification(form.value.title,form.value.message,client.deviceToken).subscribe(resToken=>{
            console.log("RESPONSE TOKEN :",resToken)
          
          },err=>{
            console.log("Error Occured",err)
            this.errorNotifications1.push(client);
            localStorage.setItem("errorNotification1",JSON.stringify(this.errorNotifications1));
          })
        
        })
        
           setTimeout(()=>{
          console.log(JSON.parse(localStorage.getItem("errorNotification1")));
     
          if(JSON.parse(localStorage.getItem("errorNotification1"))==null)
          {
            this.toast.success("Notifications sent to all Clients","Success",{
              timeOut:2500,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass:'toast-top-right'
            })
          }
          else{
          if(JSON.parse(localStorage.getItem("errorNotification1")).length>0)
          {
            this.toast.error("Notifications not sent to some clients","Error",{
              timeOut:2500,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass:'toast-top-right'
            })
  
            localStorage.setItem("errorNotification1",null)
          }
        }
        },800)   
      
      })  
    }
    
  }

}
