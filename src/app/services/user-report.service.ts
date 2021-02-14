import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserReportService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) { }

  postReportPhoto(data)
  {
    return this.http.post(this.serverUrl+'/post-report-photo/',data);
  }

  postReport(data)
  {
    return this.http.post(this.serverUrl+'/post-report/',data);
  }

  getAllReports()
  {
    return this.http.get(this.serverUrl+'/get-reports/');
  }

}
