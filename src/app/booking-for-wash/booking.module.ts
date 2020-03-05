import{NgModule} from '@angular/core'
import{RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BookingForWashComponent } from './booking-for-wash.component';

export const bookCustmodel:Routes=[
    {path:'',redirectTo:'Book',pathMatch:'full'},

    {path:'Book',component:BookingForWashComponent}

]
@NgModule({
    declarations:[BookingForWashComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(bookCustmodel)],
    providers:[],
    exports:[BookingForWashComponent]
})

export class BookingModule{

}