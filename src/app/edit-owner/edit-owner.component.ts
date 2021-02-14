import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../services/client.service';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit {

  ownerId:number;
  ownerData  = {
    ownerId:null,
    ownerName:'',
    phone:null,
    email:'',
    ownerImg:'',
    password:''
  }
  constructor(private route:ActivatedRoute,private ownerService:OwnersService,private routerBtn:Router,private toast:ToastrService) { }

  ngOnInit(): void {

    this.route.params.subscribe((newParams:Params)=>{
      this.ownerId = newParams['id'];
      console.log(this.ownerId);
      this.ownerService.getOwnerById(+this.ownerId).subscribe(res=>{
        this.ownerData = res["user"];
        console.log("Owner Data : ",this.ownerData);
      })
    })

  }

  
  onSubmit(form:NgForm)
  {
    console.log("Form Data : ",form.value);
    this.ownerService.editOwner(form.value).subscribe(res=>{
      console.log(res);
      if(res["status"])
      {
        // alert("Client Details Updated");
        this.toast.success("Owner Details Updated","Successs",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
        this.routerBtn.navigate(['/owners']);
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



}
