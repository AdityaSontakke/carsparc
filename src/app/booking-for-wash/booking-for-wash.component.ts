import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BookingForWashService } from './booking-for-wash.service';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-for-wash',
  templateUrl: './booking-for-wash.component.html',
  styleUrls: ['./booking-for-wash.component.css'],
  providers: [BookingForWashService]
})

export class BookingForWashComponent implements OnInit {
  intilavalue:any;
  tempresobj:any;
  BookWashModel: FormGroup

  //sessiontempVariable to store session object
  SessionBookingId: any;
  formsubmit:boolean=false
  constructor(private bookingService: BookingForWashService,private router:Router) {

    this.BookWashModel = new FormGroup({
      cid: new FormControl(),
      
      vechiclename: new FormControl('',Validators.required),
      vehicletype: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      mobileno: new FormControl('',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]),
      servicetype: new FormControl('',Validators.required),
      requiredDescription: new FormControl('',Validators.required),
      needpickup: new FormControl('',Validators.required),
      arealocation: new FormControl('',Validators.required),
      pickupdate: new FormControl('',Validators.required),
      budgetprice: new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      //booking id
      bid:new FormControl()

    })

    //to clear the entered fields on the view page//
    this.intilavalue=this.BookWashModel.value
    
  }
//to fetch the details based on mobileno fromsignup page//
  sessionobj: any;
  responseobj: any;
  tempvar: any

  //---------------------------Start of ngOnInit()-----------------------------------//
  ngOnInit() {
    this.sessionobj = localStorage.getItem('key');
    this.SessionBookingId=localStorage.getItem('SessionBookingid');


    console.log("Session-Customer Mobile Number:" + this.sessionobj);

    //-------Checking if 'SessionBookingId' is empty:
    //If "YES": We will fetch details from UserSingup table and update 'fkid' in session//
    //If "NO": We will fetch the details from 'Booking' table//

    if(this.SessionBookingId===""){
      //call to the service method--getbymobileno//

    this.bookingService.getBymobileno(this.sessionobj).subscribe(
      res => {
        this.responseobj = res, console.log(res);
        console.log("+++++++++++++"+JSON.stringify(this.responseobj));
        console.log("+++++++"+JSON.stringify(this.BookWashModel.value));
        
        this.BookWashModel.patchValue(res[0]);
        console.log(JSON.stringify(this.BookWashModel.value));
        this.tempvar = this.BookWashModel.value.cid;
    
        //Setting 'fkid' into session variable//
        localStorage.setItem('fkid',this.tempvar);
        

      },


      err => { this.responseobj = err }
    )


      
    }
       
    else{   
        //call to the service to fetch the details  based on bid(bookingid)==redirected from the bookinglist module//        
        this.bookingService.getBookingDetailsBasedOnBid(this.SessionBookingId).subscribe(
           res=>{this.tempresobj=res;console.log(res),
                 console.log("FROM ELSE PART-----------"+JSON.stringify(this.tempresobj));
                 console.log("FROM ELSE PART*********"+JSON.stringify(this.BookWashModel.value));
                 
                 this.BookWashModel.patchValue(res[0]);
                 
                 //---------Applying patch to overwrite/set the 'cid' back---------//
                 this.BookWashModel.patchValue({cid:localStorage.getItem('fkid')});

                 console.log(JSON.stringify(this.BookWashModel.value));
                 console.log("call form the getbookingdetails--------"+JSON.stringify(this.BookWashModel.value));
                 },
           err=>{console.log(err)}
        )
  
    }
        //All the fields with respect to buffered bid has been filled - now clean the bid from localStorage//
        localStorage.setItem('SessionBookingid',"")
  } //--------------------------End of ngOnInit()---------------------------------------------//











  bookingresponse: any
  
//method call on the button click
  public BookForWashAction(books: any) {
    this.formsubmit=true
    //to store the foriegn keyid//
    //localStorage.setItem('fkid',books.cid);
    
    //console.log("---session foriegnKeyId----"+JSON.stringify(books.cid))

    //alert(JSON.stringify(books))
    console.log(JSON.stringify(books))
    const postData = {
      ...books,
      fkid: books.cid,
    }
    alert(JSON.stringify(books));
    this.bookingService.saveBookingDetails(postData).subscribe(
      res => { this.bookingresponse = res;

               if(this.bookingresponse!=null){
                 this.BookWashModel.patchValue(this.intilavalue);
               }

            },
      err => { this.bookingresponse = err }

    )
    this.router.navigate(['MenuDashboard/bookinglist']);
    
  }

}


