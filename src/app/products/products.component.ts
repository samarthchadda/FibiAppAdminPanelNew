import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import { SubscriptionService } from '../services/subscription.service';

import {ShowPricesComponent} from '../show-prices/show-prices.component'; 


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  
  filteredStatus='';

  constructor(private subsService:SubscriptionService,private routerBtn:Router,public matDialog:MatDialog) { }

  ngOnInit(): void {
    this.subsService.getAllProducts().subscribe(res=>{
      this.products = res["products"];
      this.products.forEach(prod => {
        var months_arr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

        // Convert timestamp to milliseconds
        var date = new Date((+prod.created)*1000);

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        // Hours
        var hours = date.getHours();

        // Minutes
        var minutes = "0" + date.getMinutes();

        // Seconds
        var seconds = "0" + date.getSeconds();

        // Display date time in MM-dd-yyyy h:m:s format
        // var fulldate = month+' '+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        var fulldate = month+' '+day+','+year;
        
        // console.log(fulldate)
        prod.created = fulldate;

        if(prod.statement_descriptor==null)
        {
          prod.statement_descriptor = ''
        }

        if(prod.unit_label==null)
        {
          prod.unit_label = ''
        }
        prod.type = "https://dashboard.stripe.com/test/products/"+prod.id.toString();
      });
      console.log(this.products)
    })
  }

  newProduct()
  {
    this.routerBtn.navigate(['/create-product']);
    
  }

  checkPrices(prices)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'prices-component';
    dialogConfig.height = "400px";
    dialogConfig.width = "850px";
    //passing data
    dialogConfig.data = {prices:prices}
    
    const modalDialog = this.matDialog.open(ShowPricesComponent,dialogConfig);
    
  }

}
