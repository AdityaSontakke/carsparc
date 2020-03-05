import { Component, OnInit } from '@angular/core';
import { BookingListService } from './bookingList.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
  providers:[BookingListService]
})
export class BookingListComponent implements OnInit {
  

  constructor(private bookinglistService:BookingListService,private route:Router) {

   }


   sessionId: string;
  ngOnInit() {
    
    this.sessionId=localStorage.getItem('fkid');
     console.log("session obj----"+this.sessionId);
      //method declaration to the getbookingListOnid()//
      this.getBookingListOnId(this.sessionId);

      

    
  }

  //method defination---//
  responseobj:any;
  getBookingListOnId(sessionId:any){
    this.bookinglistService.getAllBookingById(sessionId).subscribe(
      res=>{this.responseobj=res,console.log(res)},
      err=>{this.responseobj=err}
    )
}



//navigate to booking booking wash//
EditBasedOnId(bookingId:any){
  console.log("SessionBookingid"+JSON.stringify(bookingId));
  localStorage.setItem("SessionBookingid",bookingId);

  //navigate to the bookingForwash module//
  this.route.navigate(['MenuDashboard/Book']);
 


  

}



}
