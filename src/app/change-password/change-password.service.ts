import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';




export class ChangePasswordService {

    constructor(private http: HttpClient) {


    }

    getByPasswordAndMobileno(oldpassword: any,mobileno: any) {
        let url = "http://localhost:6545/api/signup/ServiceGetByPasswordAndMobileno/"+ oldpassword+"/"+mobileno
        return this.http.get(url);
    }

    //Service - path="/setpassupdate/{password}/{mobileno}"//
    update_password(varpassword:any,varmobileno:any){
        let url="http://localhost:6545/api/signup/setpassupdate/"+varpassword+"/"+varmobileno;
        return this.http.put(url,varpassword,varmobileno);        
    }





}