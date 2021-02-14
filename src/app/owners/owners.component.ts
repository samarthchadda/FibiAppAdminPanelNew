import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners = [];

  filteredStatus='';


  constructor(private toast:ToastrService,private ownerService:OwnersService, private routerBtn:Router) { }

  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe(res=>{
     
      this.owners = res["allOwners"];

      // this.owners.forEach(owner=>{
      //    //converting timestamp in seconds to date
      // var a = new Date(1607021910384);
      // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      // var year = a.getFullYear();
      // var month = months[a.getMonth()];
      // var date = a.getDate();
      // var hour = a.getHours();
      // var min = a.getMinutes();
      // var sec = a.getSeconds();
      // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      // // console.log(time)
      // owner.registrationDate = time;
      // // console.log(owner)
      // });

      this.owners.forEach(owner=>{
        if(owner.deviceToken==null )
        { 
          owner.deviceToken="";
        }
        if(owner.ownerImg==null)
        {
          owner.ownerImg = 'https://ik.imagekit.io/4afsv20kjs/empImg_Bi_CID4Ly.jpg'
        }
      })

      console.log(this.owners);    

    },err=>{
      console.log("Error Occured")
    })
  }
  

  deleteOwner(id)
  {
    this.ownerService.delOwner(+id).subscribe(res=>{
      if(res["status"])
      {
        this.toast.info("Owner Deleted Successfully","Successs",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
        this.ngOnInit();

      }else{
        this.toast.error("Owner not deleted....error occured","Error",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      }
    })
  }

}
