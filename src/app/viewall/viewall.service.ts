import{Injectable} from '@angular/core'
import{HttpClient} from  '@angular/common/http'

@Injectable(
    {providedIn:'root'}
    
)

export class viewallService{

    constructor(private http:HttpClient){
    
    }


    getall(){

        console.log("reached here")

        let url="http://localhost:6545/api/signup/getall";
        
        
            return this.http.get(url);


    }



}
