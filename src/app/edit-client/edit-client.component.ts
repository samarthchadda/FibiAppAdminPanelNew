import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clientId:number;

  clientData  = {
    clientId:null,
    clientName:'',
    phone:null,
    email:'',
    clientImg:'',
    password:''
  }

  constructor(private route:ActivatedRoute,private clientService:ClientService,private routerBtn:Router,private toast:ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((newParams:Params)=>{
      this.clientId = newParams['id'];
      console.log(this.clientId);
      this.clientService.getSingleClients(+this.clientId).subscribe(res=>{
        this.clientData = res["client"];
        console.log("Client Data : ",this.clientData);
      })
    })
  }


  onSubmit(form:NgForm)
  {
    console.log("Form Data : ",form.value);
    this.clientService.editClient(form.value).subscribe(res=>{
      if(res["status"])
      {
        // alert("Client Details Updated");
        this.toast.success("Client Details Updated","Successs",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
        this.routerBtn.navigate(['/customers']);
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
