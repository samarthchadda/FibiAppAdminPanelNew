import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  defaultRecurring="month";
  defaultEmpCount = "1";
  constructor(private subsService:SubscriptionService,private routerBtn:Router,private toast:ToastrService) { }

  ngOnInit(): void {


  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    form.value.unit_label = +form.value.unit_label;
    // console.log()
    this.subsService.addProduct(form.value).subscribe(res=>{
      if(res["status"])
      {
        // alert("Client Details Updated");
        this.toast.success(res["message"],"Successs",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
        this.routerBtn.navigate(['/products']);
      }
      else
      {
        this.toast.error("Error occured","Error",{
          timeOut:2500,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-right'
        })
      }
    },err=>{
      this.toast.error("Error occured","Error",{
        timeOut:2500,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass:'toast-top-right'
      })
    })
  }

}
