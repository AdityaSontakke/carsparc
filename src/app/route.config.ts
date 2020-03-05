import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserServiceButtonsComponent } from './user-service-buttons/user-service-buttons.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

//import {} from './sign-up/SignupCustomModule'
//import{} from './edit-profile/editmodule.module#EditCustomModule'
//import{} from './booking-list/bookingList.module#bookingListModule',
//import{} from './delete-account/delete-account.module#DeleteAccountModule'



import { BookingForWashComponent } from './booking-for-wash/booking-for-wash.component';
import { ViewallComponent } from './viewall/viewall.component';
import { BookingListComponent } from './booking-list/booking-list.component';
export const MyRoutes: Routes =
    [
        { path: '', component: LoginComponent },
        { path: 'UserserviceButtons', component: UserServiceButtonsComponent },
        // {path:'usersignUp',component:SignUpComAponent},
        { path: 'usersignUp', loadChildren: './sign-up/SignupCustomModule#SignupCustomModule' },
        { path: 'setPassword', component: SetPasswordComponent },
        //{ path: 'ForgotPassword', component: ForgotPasswordComponent },
        {path:'ForgotPassword',loadChildren:'./forgot-password/ForgotPasswordCustomModule#ForgotPasswordCustomModule'},
    
        
        {
            path: 'MenuDashboard', component: DashBordComponent,
            children: [
                //  {path:'Book',component:BookingForWashComponent},
                { path: 'Book', loadChildren: './booking-for-wash/booking.module#BookingModule' },
                {path:'changepassword',loadChildren:'./change-password/change_password.module#ChangePasswordModule'},
                { path: 'editprofile', loadChildren: './edit-profile/editmodule.module#EditCustomModule'},
                {path:'bookinglist',loadChildren:'./booking-list/bookingList.module#bookingListModule'},
                {path:'deleteaccount',loadChildren:'./delete-account/delete-account.module#DeleteAccountModule'},
                {path:'viewall', component:ViewallComponent}
                
               // { path: 'chagepassword', component: ChangePasswordComponent }
            ]

        }
    ]

