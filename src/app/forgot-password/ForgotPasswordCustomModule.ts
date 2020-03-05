import{NgModule} from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const forgotPassCustModel:Routes=[
    {path:'',redirectTo:'ForgotPassword',pathMatch:'full'}, 

    {path:'ForgotPassword',component:ForgotPasswordComponent},
]
@NgModule({
    

    declarations:[ForgotPasswordComponent],
    imports:[FormsModule,CommonModule,ReactiveFormsModule,RouterModule.forChild(forgotPassCustModel)],  
    providers:[],
    exports:[ForgotPasswordComponent]

})
export class ForgotPasswordCustomModule{

}