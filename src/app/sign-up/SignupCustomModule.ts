import { NgModule } from '@angular/core'
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

export const signupCustmodel: Routes = [
    { path: '', redirectTo: 'usersignUp', pathMatch: 'full' },

    { path: 'usersignUp', component: SignUpComponent }

];

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule, FormsModule
        , ReactiveFormsModule
        , RouterModule.forChild(signupCustmodel)
    ],
    providers: [],
    exports: [SignUpComponent]
})


export class SignupCustomModule {

}