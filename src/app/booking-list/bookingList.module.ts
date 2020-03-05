import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookingListComponent } from './booking-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const bookingListcustom:Routes=[
    {path:'',redirectTo:'bookinglist',pathMatch:'full'},
    {path:'bookinglist',component:BookingListComponent}
]


@NgModule({
    declarations:[BookingListComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(bookingListcustom)],
    providers:[bookingListModule],


})

export class bookingListModule{

}