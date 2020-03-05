import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//toaster..
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserServiceButtonsComponent } from './user-service-buttons/user-service-buttons.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { MyRoutes } from './route.config';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';
//import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

//formbuilder
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewallComponent } from './viewall/viewall.component'
import { viewallService } from './viewall/viewall.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthenticationService } from './login/login.service';
import { HomeComponent } from './home/home.component';
//import { DeleteAccountComponent } from './delete-account/delete-account.component';

//import { BookingListComponent } from './booking-list/booking-list.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserServiceButtonsComponent,
    MasterComponent,
    // SignUpComponent,
    SetPasswordComponent,
    //ForgotPasswordComponent,
    DashBordComponent,
    //EditProfileComponent,
    SidebarComponent,
    ViewallComponent,
    HomeComponent,
    //DeleteAccountComponent,
   // ChangePasswordComponent,
   //---validators=>confirm password
   
   //BookingListComponent
   

    
  ],
  imports: [
    BrowserModule,
    //formcontrol
    FormsModule,
    ReactiveFormsModule,
    //----imported this for service---
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(MyRoutes),

    //toater import
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [AuthenticationService],
  bootstrap: [MasterComponent]
})
export class AppModule { }
