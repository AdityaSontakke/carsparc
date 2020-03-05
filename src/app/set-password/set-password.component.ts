import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { setPasswordService } from './set-password.service';
import { compareValidator } from '../shared/compare-validators';



@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css'],
  providers: [setPasswordService]

})
export class SetPasswordComponent implements OnInit {


  setpassowrdModule: FormGroup;
  isAllFieldsFilled:boolean=false;
  

  constructor(private setpassservice: setPasswordService) {
       this.setpassowrdModule = new FormGroup({

        varpassword: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
        varconfirmPassword: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$'),compareValidator('varpassword')])

      })

      

    
  }

  get Password() {
    return this.setpassowrdModule.get('varpassword');
}
get ConfirmPassword() {
    return this.setpassowrdModule.get('varconfirmPassword');
}

  
  

  subscribe_serSetpassword: any;
  sessionmobile: any;
  temppass:any;

  updatePasswordAction(data) {
    this.isAllFieldsFilled=true;
    this.temppass=data.varpassword;

    console.log(JSON.stringify(data));
    console.log(this.temppass);

    this.sessionmobile= localStorage.getItem('key');
    console.log("session mobileno"+this.sessionmobile);
    
    this.setpassservice.update_password(this.temppass,this.sessionmobile).subscribe

    (
      res => { this.subscribe_serSetpassword=res },
      err => { this.subscribe_serSetpassword = err }
      
    );




  }
  


  ngOnInit() {

   
    
  }

}
