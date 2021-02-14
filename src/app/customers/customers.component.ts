import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  clients = [];

  filteredStatus='';

  constructor(private clientService:ClientService, private routerBtn:Router,private toast:ToastrService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(res=>{
      this.clients = res["allClients"];

      this.clients.forEach(client=>{
        client.favourites = "";
        if(client.clientImg==null)
        {
          client.clientImg = 'https://ik.imagekit.io/4afsv20kjs/empImg_Bi_CID4Ly.jpg'
        }
      })
      console.log(this.clients);

    },err=>{
      console.log("Error Occured")
    })
  }

  deleteClient(id)
  {
    this.clientService.deleteClient(+id).subscribe(res=>{
      if(res["status"])
      {
        this.toast.info("Client Deleted Successfully","Successs",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
        this.ngOnInit();

      }else{
        this.toast.error("Client not deleted....error occured","Error",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      }
    })
  }

}
