import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) {

   }
   
   getAllClients()
   {
     return this.http.get(this.serverUrl+'/all-clients/');
   }

   getAllClientsGraph()
   {
     return this.http.get(this.serverUrl+'/all-clients-month/');
   }

   getSingleClients(id)
   {
     return this.http.get(this.serverUrl+'/all-clients/'+id);
   }

   editClient(data)
   {
     return this.http.post(this.serverUrl+'/edit-client-details/',data);
   }

   deleteClient(id)
   {
     return this.http.get(this.serverUrl+'/del-client/'+id);
   }

}
