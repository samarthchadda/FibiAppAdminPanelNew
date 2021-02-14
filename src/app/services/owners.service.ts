import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) {

   }

   getAllOwners()
   {
     return this.http.get(this.serverUrl+'/all-owners/');
   }
    
    getOwnerById(onwerId)
    {
      return this.http.get(this.serverUrl+'/get-owner/'+onwerId);
    }

    editOwner(data)
    {
      return this.http.post(this.serverUrl+'/edit-admin-owner',data);
   
    }

    delOwner(ownerId)
    {
      return this.http.get(this.serverUrl+'/del-owner/'+ownerId);
   
    }
}
