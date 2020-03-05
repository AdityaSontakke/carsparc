import{Injectable} from '@angular/core'

import { HttpClient } from '@angular/common/http';

@Injectable()


export class setPasswordService{

    constructor(private http:HttpClient){

    }
    
    update_password(varpassword:any,varmobileno:any){

        let url="http://localhost:6545/api/signup/setpassupdate/"+varpassword+"/"+varmobileno;

        return this.http.put(url,varpassword,varmobileno);
        
    }


   
    

}
