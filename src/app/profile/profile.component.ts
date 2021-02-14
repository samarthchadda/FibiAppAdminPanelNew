import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  constructor() { }

  ngOnInit(): void {
    this.firstName = JSON.parse(localStorage.getItem('authUserData')).firstName;
    this.lastName = JSON.parse(localStorage.getItem('authUserData')).lastName;
    this.phone = JSON.parse(localStorage.getItem('authUserData')).phone;
    this.email = JSON.parse(localStorage.getItem('authUserData')).email;
    
  }

}
