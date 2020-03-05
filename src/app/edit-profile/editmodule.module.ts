import { NgModule } from '@angular/core'
import { EditProfileComponent } from './edit-profile.component';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';


export const editRoute: Routes = [
    { path: '', redirectTo: 'editprofile', pathMatch: 'full' },

    { path: 'editprofile', component:EditProfileComponent }

];

@NgModule({
    declarations: [
        EditProfileComponent
    ],
    imports: [
        CommonModule, FormsModule
        , ReactiveFormsModule
        , RouterModule.forChild(editRoute)
    ],
    providers: [],
    exports: [EditProfileComponent]
})


export class EditCustomModule {

}