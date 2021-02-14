import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserReportService } from '../services/user-report.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'; 
import {ReportDetailComponent} from '../report-detail/report-detail.component'; 

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements OnInit {

  userReports = [];
  // reportPhoto;

  constructor(private userReportService:UserReportService,private toast:ToastrService,public matDialog:MatDialog) { }

  ngOnInit(): void {
    this.userReportService.getAllReports().subscribe(res=>{
        this.userReports = res["allReports"];
        console.log(this.userReports);
    })
  }

  openDetailsBox(reportData:any)
  {
    const dialogConfig = new MatDialogConfig();
    //if the user clicks outside the modal, it doesn’t close
    dialogConfig.disableClose = true;
    dialogConfig.id = 'employees-component';
    dialogConfig.height = "550px";
    dialogConfig.width = "850px";
    //passing data
    dialogConfig.data = {report:reportData}
    
    const modalDialog = this.matDialog.open(ReportDetailComponent,dialogConfig);
    

  }
  // selectImage(event)
  // {
  //   const file = event.target.files[0];
  //   this.reportPhoto = file;
  //   console.log("Report Image : ",this.reportPhoto);
  // }


  // onSubmit(form:NgForm)
  // {
  //   const formData = new FormData(); 
  //   formData.append('reportPhoto',this.reportPhoto);

  //   this.userReportService.postReportPhoto(formData).subscribe(res=>{
  //     console.log(res["imgUrl"]);
     
  //     if(res["status"])
  //     {
  //       form.value.screenShot = res["imgUrl"];

  //       this.userReportService.postReport(form.value).subscribe(resultData=>{
  //         if(resultData["status"])
  //         {
  //           this.toast.success("Report Submitted","Success",{
  //             timeOut:2500,
  //             progressBar:true,
  //             progressAnimation:'increasing',
  //             positionClass:'toast-top-right'
  //           })
  //         }else{
  //           this.toast.error("Report Not submitted","Error",{
  //             timeOut:2500,
  //             progressBar:true,
  //             progressAnimation:'increasing',
  //             positionClass:'toast-top-right'
  //           })
  //         }
  //       })
  //    }
  //   else{
  //     this.toast.error(res["message"],"Error",{
  //       timeOut:2500,
  //       progressBar:true,
  //       progressAnimation:'increasing',
  //       positionClass:'toast-top-right'
  //     })
  //     }
  //   })
  // }

}
