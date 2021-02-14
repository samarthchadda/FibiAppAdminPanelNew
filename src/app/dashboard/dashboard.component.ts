import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AppointmentsService } from '../services/appointments.service';
import { ClientService } from '../services/client.service';
import { MessagingService } from '../services/messaging.service';
import { SaloonsService } from '../services/saloons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalSaloons  = 0;
  totalOwners = 0;
  totalClients = 0;
  totalAppoints = 0;

  //pie chart
  public pieChartLabels:string[] = ['Positive', 'Negative', 'InConclusive'];  
  public pieChartData:number[] = [10,20,5];
  public pieChartType:string = 'pie';
  public pieChartLegend = true;
  public pieChartColors= [
    {
      backgroundColor:['rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)']
    }
  ];


  //bar chart (for saloons)
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Saloons Per Month' }
  ];
  public barChartColors= [
    {
      backgroundColor:['rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)','rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)']
    }
  ];


  //bar chart (for clients)
  barChartOptions1: ChartOptions = {
    responsive: true,
  };
  barChartLabels1: Label[] = [];
  barChartType1: ChartType = 'bar';
  barChartLegend1 = true;
  barChartPlugins1 = [];

  barChartData1: ChartDataSets[] = [
    { data: [], label: 'Clients Per Month' }
  ];
  public barChartColors1= [
    {
      backgroundColor:['rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)','rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)']
    }
  ];


    //bar chart (for bookings)
    barChartOptions2: ChartOptions = {
      responsive: true,
    };
    barChartLabels2: Label[] = [];
    barChartType2: ChartType = 'bar';
    barChartLegend2 = true;
    barChartPlugins2 = [];
  
    barChartData2: ChartDataSets[] = [
      { data: [], label: 'Bookings Per Month' }
    ];
    public barChartColors2= [
      {
        backgroundColor:['rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)','rgba(255,0,0,0.3)','rgba(0,255,0,0.3)','rgba(0,0,255,0.3)']
      }
    ];
  

  message;
  token = "f3XiyVUmbeBQTfCTvcgs5_:APA91bEk5Tee6ujjEovUefADYm_2g0qp7edzt__8qadiu-YHXdGHh7qqBeaUTbxHwe5OL_HHBvK3oWB2mblUXtMH_MWwtX6LrLqWpGRYs66lkRFY-uEPIi9pZcNUQpY9nBV2BTmxIDw8";
  constructor(private messagingService: MessagingService,private saloonService:SaloonsService,private clientService:ClientService,private appointService:AppointmentsService) { }


  ngOnInit(): void {
    // this.messagingService.requestPermission()
    // this.messagingService.receiveMessage()
    // this.messagingService.listen();
    // this.message = this.messagingService.currentMessage;

    this.saloonService.getAllSaloonsGraph().subscribe(res=>{
      // console.log(res["allSaloons"]);
      var labelsBar = [];
      var dataBar = [];
      res["allSaloons"].forEach(s=>{
        
        if(s.month=="01" )
        {
          s.month = "January"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="02" )
        {
          s.month = "Febuary"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }  
        if(s.month=="03" )
        {
          s.month = "March"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="04" )
        {
          s.month = "April"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="05" )
        {
          s.month = "May"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="06" )
        {
          s.month = "June"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="07" )
        {
          s.month = "July"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="08" )
        {
          s.month = "August"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="09" )
        {
          s.month = "September"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="10" )
        {
          s.month = "October"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="11" )
        {
          s.month = "November"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
        if(s.month=="12" )
        {
          s.month = "December"
          labelsBar.push(s.month);
          dataBar.push(s.saloons)
        }
      })
      console.log(res["allSaloons"]);
      this.barChartLabels = labelsBar;
      console.log(this.barChartData[0].data)
      this.barChartData[0].data = dataBar;

    });



    
    this.clientService.getAllClientsGraph().subscribe(res=>{
      // console.log(res["allSaloons"]);
      var labelsBar = [];
      var dataBar = [];
      res["allClients"].forEach(s=>{
        
        if(s.month=="01" )
        {
          s.month = "January"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="02" )
        {
          s.month = "Febuary"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }  
        if(s.month=="03" )
        {
          s.month = "March"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="04" )
        {
          s.month = "April"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="05" )
        {
          s.month = "May"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="06" )
        {
          s.month = "June"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="07" )
        {
          s.month = "July"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="08" )
        {
          s.month = "August"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="09" )
        {
          s.month = "September"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="10" )
        {
          s.month = "October"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="11" )
        {
          s.month = "November"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
        if(s.month=="12" )
        {
          s.month = "December"
          labelsBar.push(s.month);
          dataBar.push(s.clients)
        }
      })
      console.log(res["allSaloons"]);
      this.barChartLabels1 = labelsBar;
      console.log(this.barChartData[0].data)
      this.barChartData1[0].data = dataBar;

    });


    
    
    this.appointService.getAllAppointsGraph().subscribe(res=>{
      // console.log(res["allSaloons"]);
      var labelsBar = [];
      var dataBar = [];
      console.log("App appoints : ",res["allAppoints"]);
      res["allAppoints"].forEach(s=>{
        
        if(s.month=="01" )
        {
          s.month = "January"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="02" )
        {
          s.month = "Febuary"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }  
        if(s.month=="03" )
        {
          s.month = "March"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="04" )
        {
          s.month = "April"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="05" )
        {
          s.month = "May"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="06" )
        {
          s.month = "June"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="07" )
        {
          s.month = "July"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="08" )
        {
          s.month = "August"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="09" )
        {
          s.month = "September"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="10" )
        {
          s.month = "October"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="11" )
        {
          s.month = "November"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
        if(s.month=="12" )
        {
          s.month = "December"
          labelsBar.push(s.month);
          dataBar.push(s.appoints)
        }
      })
      this.barChartLabels2 = labelsBar;
      console.log(this.barChartData[0].data)
      this.barChartData2[0].data = dataBar;

    });

    this.saloonService.getAllCounts().subscribe(res=>{
        this.totalOwners = res["totalOwners"];
        this.totalSaloons = res["totalSaloons"];
        this.totalClients = res["totalClients"];
        this.totalAppoints = res["totalBookings"];
        
    })

  }
  sendNotification()
  {
    // this.messagingService.sendNotification(this.token).subscribe(res=>{
    //   console.log(res);
    // }); 
  }


}
