import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { signupService } from './signup.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [signupService]
})
export class SignUpComponent implements OnInit {
  signupModel: FormGroup;
  //FlagFormsubmited:boolean=false;
  //used for button toggle
  public show_dialog: boolean = false;


  constructor(private Servicesignup: signupService,private toastr: ToastrService,private router: Router) {

    this.signupModel = new FormGroup({

      name: new FormControl('',Validators.required),
      mobileno: new FormControl('', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
      otp: new FormControl('')

    })


  }

  sersignup: any;
  

  public saveAction(data: any) {
     //for validation..//
     //this.FlagFormsubmited=true

 
    localStorage.setItem('key',data.mobileno);
    console.log(JSON.stringify(data));

    this.Servicesignup.saveAllUser(data).subscribe
         
            (
              res => { this.sersignup = res;
                        if(this.sersignup===true){
                          this.toastr.success("data inserted","success")
                        }
                        else{
                          this.toastr.error("data insertion failed" ,"failed")
                        }
              
                      },

              err => { this.sersignup = err }
              
            );
           
      
  }
          


  

  //method defination:TO check whether the record with the provided mmobileno exists..//
    responseByServie:any;
    verifyRecordExists(data:any){
         //for validation..//
    //this.FlagFormsubmited=true
      this.Servicesignup.getByMobileno(data.mobileno).subscribe
        (
          res=>{this.responseByServie=res; 
                  if(this.responseByServie === true){
                    this.toastr.error("Mobile no already exits..,error")
                    this.router.navigate(['usersignUp']); 
                }
                else{
                    this.saveAction(data);
                    }
                },
          err=>{this.responseByServie=err}
        )
}

  

  //to generate random numbers;
  codeGenerated = '';

  randomString() {

    
    //method of generate otp 
    this.show_dialog = !this.show_dialog;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.codeGenerated = randomstring;
    this.signupModel.get('otp').setValue(this.codeGenerated);
    return 0;
  }
//-----------------------------------------



  ngOnInit() {
  
  }

}
