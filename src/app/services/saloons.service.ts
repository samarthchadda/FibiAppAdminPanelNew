import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaloonsService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) { }

  getAllSaloons()
  {
    return this.http.get(this.serverUrl+'/all-saloons/');
  }

  getAllSaloonsGraph()
  {
    return this.http.get(this.serverUrl+'/all-saloons-month');
  }

  getSingleSaloon(id)
  {
    return this.http.get(this.serverUrl+'/single-saloon/'+id);
  }

  getAllEmpBySaloon(saloonId)
  {
    return this.http.get(this.serverUrl+'/all-saloon-employees/'+saloonId);
  }

  getAllServicesBySaloon(saloonId)
  {
    return this.http.get(this.serverUrl+'/all-saloon-services/'+saloonId);
  }
  
  getAllCounts()
  {
    return this.http.get(this.serverUrl+'/all-counts/');
  }

 
}
