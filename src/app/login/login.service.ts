import{Injectable} from  '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Injectable()

export class AuthenticationService{
    constructor( private http:HttpClient){

    }
        

    getByPasswordAndMobileno(password: String,mobileno: String ) {
           
        let url = "http://localhost:6545/api/signup/ServiceGetByPasswordAndMobileno/"+ password+"/"+mobileno
        return this.http.get(url);
    }
    

    authenticate(username,passworod){
        
        let url="http://localhost:6545/api/signup/validateLogin";
        return this.http.get(url)
    }

}