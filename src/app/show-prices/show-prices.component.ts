import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-prices',
  templateUrl: './show-prices.component.html',
  styleUrls: ['./show-prices.component.css']
})
export class ShowPricesComponent implements OnInit {

  pricesData;

  constructor(public dialogRef:MatDialogRef<ShowPricesComponent> ,@Optional() @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.pricesData = data.prices;
    console.log(this.pricesData)
    this.pricesData.forEach(price => {
      // console.log(price.recurring.interval)
      price.recurring = price.recurring.interval+"ly";
      console.log(price.recurring)
      var months_arr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

      // Convert timestamp to milliseconds
      var date = new Date((+price.created)*1000);

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
      price.created = fulldate;


    });
  }

  ngOnInit(): void {
  }

  closeModel()
  {
    this.dialogRef.close();
  }


}
