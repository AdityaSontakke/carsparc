import{NgModule} from '@angular/core'
import{RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DashBordComponent } from './dash-bord.component';

export const dashBoardModel:Routes=[
    {path:'',redirectTo:'Book',pathMatch:'full'},

    {path:'Book',component:DashBordComponent}

]
@NgModule({
    declarations:[DashBordComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(dashBoardModel)],
    providers:[DashBordComponent],
    exports:[DashBoardModule]
})

export class DashBoardModule{

}