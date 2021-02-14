import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import {SaloonDetailComponent} from '../saloon-detail/saloon-detail.component'; 

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  allAppointments:any[] = [];

  filterString = "";
  filtered;
   
  constructor(private appointService:AppointmentsService,public matDialog:MatDialog) { 
    // this.onFilterChange();
    this.appointService.getAllAppointments().subscribe(res=>{
      res["allAppointments"].forEach(appoint=>{
        appoint.bookingTime=appoint.bookingTime.srtTime+"-"+appoint.bookingTime.endTime;
        if(appoint.note==null)
        {
          appoint.note="no note"
        }
        if(appoint.clientPhone==null)
        {
          appoint.clientPhone="NA"
        }
        
        // Months array
        var months_arr = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

        // Convert timestamp to milliseconds
        var date = new Date(appoint.bookingDate);

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
        appoint.bookingDate = fulldate;
        // filtered fate
        // var convdataTime = month+' '+day;
        // return convdataTime;

      })
      this.allAppointments = res["allAppointments"];
      
      console.log(this.allAppointments);
    })
   
  }

  showAllAppoint:boolean = true;
  ngOnInit(): void {
    // this.showAllAppoint = false;
    setTimeout(()=>{
           
      this.showAllAppoint = false;
      this.onFilterChange();

    },1000)
   
  
  }


  
  openModal(id)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'saloon-component';
    dialogConfig.height = "550px";
    dialogConfig.width = "850px";
    //passing data
    dialogConfig.data = {saloonId:id}
    
    const modalDialog = this.matDialog.open(SaloonDetailComponent,dialogConfig);    

  }

  onFilterChange() {
    this.filtered = this.allAppointments.filter((invoice) => this.isMatch(invoice));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().toLowerCase().indexOf(this.filterString.toLowerCase()) > -1
    }
  }

}
