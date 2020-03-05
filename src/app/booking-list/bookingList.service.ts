
import{Injectable}  from   '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable()

export class BookingListService{

    constructor(private http:HttpClient ){

    }

     getAllBookingById( fkid:any){
         let url="http://localhost:6545/api/booking/getall/"+fkid;
         return this.http.post(url,fkid);
     }

}