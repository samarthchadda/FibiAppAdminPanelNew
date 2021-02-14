import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl  = 'http://160.153.254.97:8000/api';
  //Behaviour subject for storing authentication state
  loggedIn = new BehaviorSubject<boolean>(false);

  //Behaviour subject for storing the user
  authUser = new BehaviorSubject<Object>(null);
  
  constructor(private http:HttpClient,
    private routerBtn:Router) { }

   //method to send signin request to webapi
   loginUser(data)
   {    
     return this.http.post(this.serverUrl+'/admin-login',data);
   } 

    //method to implement auto-login functionality
  autoLogin()
  {
  //now we will retrieve all data from local storage , whenever the application restarts             
      const authUserInfo = localStorage.getItem('authUserData');
      console.log(authUserInfo);
      //checking if that data key exists
      if(!authUserInfo)
      {
          return;
      }
      else{
        //emitting login details to BehaviourSubject
        this.loggedIn.next(true);
        this.authUser.next(JSON.parse(authUserInfo));
      }
  }


  //method to implement LOGOUT  functionality
  logout()
  {
      //now emitting no user  (setting our User to null)
      this.loggedIn.next(false);

      this.authUser.next(null);
       
      //also, removing user data from localStorage
      localStorage.removeItem('authUserData');
      
       //redirecting to different component
    this.routerBtn.navigate(['/login']);
  }

  sendToken(data)
  {
    return this.http.post(this.serverUrl+'/admin-send-token',data);
  }

  adminForgotPwd(data)
  {
    return this.http.post(this.serverUrl+'/admin-forgot-pwd',data);
  }
  

 
}
