import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';



@Injectable()

export class BookingForWashService{

    constructor(private http:HttpClient){

      
 }

 
 //call to the get method..to get all the redetails form the signup table..//
    public getBymobileno(mobileno:String){
         let url="http://localhost:6545/api/signup/editgetbymobileno/"+mobileno;
            return this.http.get(url);
 }

//Submit booking details to DB:// 
 public saveBookingDetails(data:any){
     let url="http://localhost:6545/api/booking/saveallBooking";
     return this.http.post(url,data);
 }

 //call to the service to fetch the details  based on bid(bookingid)==redirected from the bookinglist module//
 public getBookingDetailsBasedOnBid(tempBookingId:any){
    let url="http://localhost:6545/api/booking/getallBookingByBid1/"+tempBookingId;
    return this.http.get(url);


 }

}