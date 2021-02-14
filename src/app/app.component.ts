import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public toggleNavbar = true;
  public isLoggedIn = false;
  public firstName = '';
  constructor(private authService:AuthService)
  {

  }

  toggleFunc()
  {
    // this.toggleNavbar = !this.toggleNavbar;
    // console.log(this.toggleNavbar)
    //Toggle Click Function
   $("#menu-toggle").on('click',function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  
  }

  ngOnInit()
  {
    this.authService.autoLogin();
    $("#menu-toggle").on('click',function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
   

    this.authService.loggedIn.subscribe(res=>
      {
        this.isLoggedIn = res; 
        // console.log(JSON.parse(localStorage.getItem('authUserData')).firstName);
        if(JSON.parse(localStorage.getItem('authUserData'))!=null)
        {
          this.firstName = JSON.parse(localStorage.getItem('authUserData')).firstName;
 
        }
             })
  }


  logout()
  {
    this.authService.logout(); 
  }


}
