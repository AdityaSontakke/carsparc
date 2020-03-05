import{Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'

@Injectable()

export class  signupService{

    constructor(private http:HttpClient){


    }

    //check for the record existence by mobileno.. @RequestMapping(path="/getbymobileno/{mobileno}") //
    getByMobileno(mobileno:String) {
        let url = "http://localhost:6545/api/signup/getbymobileno/"+mobileno
        return this.http.get(url);
    }

    
  
    //Service: Insert record to the DB: @RequestMapping(path = "/createUser") //
    public saveAllUser(data){
        let url="http://localhost:6545/api/signup/createUser";      
        return this.http.post(url,data);
    }

}