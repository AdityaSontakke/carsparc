import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ChangePasswordService } from './change-password.service';
import { ToastrService } from 'ngx-toastr';

import { passValidator } from './validators';
import { compareValidator } from '../shared/compare-validators';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {


//for validation//


  changePasswordModel: FormGroup
  formsubmit:boolean=false;
  constructor(private tempChangePasswordService: ChangePasswordService,private toaster:ToastrService) {

    this.changePasswordModel = new FormGroup({
      OldPassword: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
      newPassword: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
      ConfirmPassword: new FormControl('',[Validators.required,compareValidator('newPassword'),Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')])

    })
  }

  get Password() {
    return this.changePasswordModel.get('newPassword');
}
get ConfirmPassword() {
    return this.changePasswordModel.get('ConfirmPassword');
}



  ngOnInit() {  }

  //Method - Being called on "Submit" button click//
  ChangePassword(passworddata: any) {
    console.log(passworddata)

    //-------------------
    //for form validation
    this.formsubmit=true;
    //---------------
    let tempOldPassword = passworddata.OldPassword;
    let tempNewPassword=passworddata.newPassword;


    alert(JSON.stringify(passworddata))
    console.log(JSON.stringify(passworddata))

    let sessionmobileno = localStorage.getItem('key');
    console.log(sessionmobileno)

    this.BaseServiceGetByPasswordAndMobileno(tempOldPassword,sessionmobileno,tempNewPassword);

  }

  //Method - Check for presence of record using Mobileno & OldPassword//
  //If Success - Call for password update//
  //If Failure - Log an error//
  tempSubscribeUserVerifResp:any;
  tempSubscribePassChangeResp:any

  BaseServiceGetByPasswordAndMobileno( tempOldPassword:String,sessionmobileno:String,tempNewPassword:String) {

    //Call to service method - verify the details in DB//
    this.tempChangePasswordService.getByPasswordAndMobileno(tempOldPassword,sessionmobileno).subscribe
    ( res=>{
          this.tempSubscribeUserVerifResp=res;
          console.log("--"+this.tempSubscribeUserVerifResp+"--");

          //User verification - Success//
          if(this.tempSubscribeUserVerifResp === true){

                //User verification success - Now call to service method - Password update//
                this.tempChangePasswordService.update_password(tempNewPassword,sessionmobileno).subscribe
                (
                  res=>{this.tempSubscribePassChangeResp=res;this.toaster.success("Password Change Successfully..!!" , "Success")},
                  err=>{this.tempSubscribePassChangeResp=err;this.toaster.success("Password Change Failed!" , "Error");}
                );   
              }

           //User verification - Failed//
          else{
           
            this.toaster.error("Old password doesn't match!");
          }

        },

          err=>{this.tempSubscribeUserVerifResp=err},
    );
  }




} //ChangePasswordComponent - Class end//
