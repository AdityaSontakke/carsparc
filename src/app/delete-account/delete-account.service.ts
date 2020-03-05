import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DeleteService{
    constructor(private http:HttpClient)
{

}


//get all the record based on mobileno//
public  getAllBasedOnMobileno(mobileno:any){
    let url="http://localhost:6545/api/signup/editgetbymobileno/"+mobileno;
        return this.http.get(url);

}


//deletes all the record of the  booking table//
public deleteByFkid(fkid:any){
    let url="http://localhost:6545/api/booking//deleteByfkId/"+fkid;
    return this.http.delete(url);

}
//delete's all the record of the  signup table//
public deleteByMobileno(mobileno:any){
    let url="http://localhost:6545/api/signup/deleteAccount/"+mobileno;
    return this.http.delete(url);

}






}