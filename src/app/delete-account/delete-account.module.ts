import { NgModule, Component } from '@angular/core';
import { DeleteAccountComponent } from './delete-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';


export const deleteCustomModule:Routes=[
    {path:'',redirectTo:'deleteaccount',pathMatch:'full'},
    {path:'deleteaccount',component:DeleteAccountComponent}
]

@NgModule({
    declarations:[DeleteAccountComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(deleteCustomModule)],
    providers:[DeleteAccountComponent]

})

export class DeleteAccountModule{

}