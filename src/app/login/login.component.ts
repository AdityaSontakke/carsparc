import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: FormGroup
  formsubmit: boolean = false;

  constructor(private authService: AuthenticationService, private temprouter: Router, private toaster: ToastrService) {

    this.loginModel = new FormGroup({
      mobileno: new FormControl('1111111111', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      password: new FormControl('anju', [Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')])

    })



  }

  loginResponseStatus: any
  validSessionStaus: Boolean;

  //--to verify whether the data exist in the db..//
  loginVerify(data: any) {

    this.formsubmit = true;

    //if (this.loginModel.invalid) { return; }
    console.log(JSON.stringify(data));

    //verify login details in db//
    this.authService.getByPasswordAndMobileno(data.password, data.mobileno).subscribe(res => {
      this.loginResponseStatus = res; console.log(res);
      if (this.loginResponseStatus === true) {

        this.validSessionStaus = true

        localStorage.setItem('key', data.mobileno);
        localStorage.setItem('SessionBookingid',"");
        
      }
      else {
        this.validSessionStaus = false
        this.temprouter.navigate(['/'])
        this.toaster.error("Invalid Credentials..!")

      }


    },
      err => { this.loginResponseStatus = err }
    )
  }



  ngOnInit() {
  }

}
