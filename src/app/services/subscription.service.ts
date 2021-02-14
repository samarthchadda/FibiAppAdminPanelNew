import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  
  serverUrl  = 'http://160.153.254.97:8000/api';

  constructor(private http:HttpClient) {

   }

   addProduct(data)
   {
     return this.http.post(this.serverUrl+'/create-product-stripe/',data);
   }

   getAllProducts()
   {
    return this.http.get(this.serverUrl+'/get-products-stripe/'); 
   }
   
}
