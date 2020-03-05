import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { editProfileService } from './editProfile.service';
import { userSignupModel } from '../model/userSignupmodel'


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [editProfileService]
})
export class EditProfileComponent implements OnInit {


  editModel: FormGroup;

  sigupclassobj;
  constructor(private epservice: editProfileService) {

    //assigning usermodelobject to tempobj(sigupclassobj)
    this.sigupclassobj = userSignupModel;

    this.editModel = new FormGroup({

      name: new FormControl('',Validators.required),
      mobileno: new FormControl('',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
      pincode: new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9][0-9][0-9][0-9][0-9]$')]),
      address: new FormControl('',[Validators.required]),
      cid: new FormControl(0),
      otp:new FormControl('',),
      password:new FormControl(''),

    })
  }

  sessionobj: any;
  getmethoddata: any;
  userdata: any;

  ngOnInit() {

    this.sessionobj = localStorage.getItem('key');
    console.log("call from nginti");
    console.log(this.sessionobj)


    //--call to the getbymobileno----
    this.getByMobileno(this.sessionobj);


  }
  updateEditProfileAction() {
    //console.log(htmObject);
    console.log("data from the model.....")
    console.log(JSON.stringify(this.editModel.value));


    this.epservice.updateRecord(this.editModel.value).subscribe(res => { this.userdata = res },
      err => { this.userdata = err }

    );

    //this.sessionobj= sessionStorage.getItem('key')

    //console.log(this.sessionobj);



  }

  getByMobileno(sessionobj) {
    console.log("session---"+sessionobj)
     this.epservice.getBymobileno(sessionobj).subscribe(
      res => {
        console.log(res);
        this.editModel.patchValue(res[0]);
        console.log("from model-------------------------------")

    console.log(JSON.stringify(this.editModel.value));

      },
      err => { this.userdata = err }
    );
    
  }




}
