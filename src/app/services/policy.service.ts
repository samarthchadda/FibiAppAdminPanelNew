import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  serverUrl  = 'http://160.153.254.97:8000/api';

  isReload : Boolean = false;

  constructor(private http:HttpClient) {

   }

   getAllPolicies()
   {
     return this.http.get(this.serverUrl+'/get-all-policies/');
   }

   editPolicy(policyName,data)
   {
     console.log(policyName,data)
    return this.http.post(this.serverUrl+'/edit-'+policyName,data);
   }

   reloadPage(boolVal:Boolean)
   {
    this.isReload = boolVal;
   }
    
}
