import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) {

   }
   
   getAllAppointments()
   {
     return this.http.get(this.serverUrl+'/all-appointments/');
   }

   getAllAppointsGraph()
   {
     return this.http.get(this.serverUrl+'/all-appointments-month/');
   }

   
}
