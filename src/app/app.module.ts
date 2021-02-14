import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//to install angular material
//ng add @angular/material


//for pie chart -- 
//npm install --save ng2-charts
//npm install --save chart.js
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { SaloonsComponent } from './saloons/saloons.component';
// import { LoginComponent } from './login/login.component'; 
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { SaloonServicesComponent } from './saloon-services/saloon-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { EditSaloonComponent } from './edit-saloon/edit-saloon.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { CustomersComponent } from './customers/customers.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SaloonDetailComponent } from './saloon-detail/saloon-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
// import { NamefilterPipe } from './namefilter.pipe';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { NameFilterPipe } from './name-filter.pipe';
import { LoginComponent } from './login/login.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ShortenPipe } from './shorten.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products/products.component';
import { ShowPricesComponent } from './show-prices/show-prices.component';
import { AddStaticFilesComponent } from './add-static-files/add-static-files.component';
import { EditPolicyComponent } from './edit-policy/edit-policy.component';


const appRoutes:Routes = [
 
  {path:'dashboard',component:DashboardComponent},
  {path:'owners',component:OwnersComponent},
  {path:'edit-owner/:id',component:EditOwnerComponent},  
  {path:'edit-client/:id',component:EditClientComponent},  
  {path:'saloons',component:SaloonsComponent},
  {path:'customers',component:CustomersComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'report',component:UserReportsComponent},   
  {path:'revenue',component:RevenueComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'login',component:LoginUserComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'products',component:ProductsComponent},
  {path:'static-files',component:AddStaticFilesComponent},
    
      
  
];

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    SaloonsComponent,
    // LoginComponent,
    EmployeesComponent,
    SaloonServicesComponent,
    DashboardComponent,
    // EditSaloonComponent,
    EditOwnerComponent,
    CustomersComponent,
    AppointmentsComponent,
    UserReportsComponent,
    EditClientComponent,
    RevenueComponent,
    SaloonDetailComponent,
    // NamefilterPipe,
    NotificationsComponent,
    NameFilterPipe,
    LoginUserComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    ReportDetailComponent,
    ShortenPipe,
    CreateProductComponent,
    ProductsComponent,
    ShowPricesComponent,
    AddStaticFilesComponent,
    EditPolicyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ChartsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
