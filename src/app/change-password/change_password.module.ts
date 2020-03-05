import{NgModule} from '@angular/core'
import{RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password.component';




export const changeCustmodel:Routes=[
    {path:'',redirectTo:'changepassword',pathMatch:'full'},

    {path:'changepassword',component:ChangePasswordComponent}

]
@NgModule({
    declarations:[ChangePasswordComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(changeCustmodel)],
    providers:[],
    exports:[ChangePasswordComponent]
})

export class ChangePasswordModule{

}