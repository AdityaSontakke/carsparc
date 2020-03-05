import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete-account.service';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css'],
  providers:[DeleteService]
})
export class DeleteAccountComponent implements OnInit {
  sessionMobileno:any;
  constructor(private deleteService:DeleteService) { 

  }

  ngOnInit() {

    this.sessionMobileno=localStorage.getItem('key');
    console.log(this.sessionMobileno);
    //to get all the records based on mobileno//
    this.getAllBasedOnMobileno(this.sessionMobileno);
    this.deleteByMobileno();
    //this.deleteByFkid();
    

    
    
  
   


  }
  responseobj:any;
  arr:any;
  getAllBasedOnMobileno(sessionMobileno:any){
    this.deleteService.getAllBasedOnMobileno(sessionMobileno).subscribe(
      res=>{this.responseobj=res;
              localStorage.setItem('fkid',res[0].cid);
              
        
            },
      err=>{this.responseobj=err}
    )

  }
  // it deletes all the records of the booking table//
  sessionFkid:any
  deleteByFkid(){
    this. sessionFkid=localStorage.getItem('fkid');
    console.log("@@@@-----"+this.sessionFkid);
    this.deleteService.deleteByFkid(this.sessionFkid).subscribe(
      res=>{this.responseobj=res;console.log(res)
              
            },
      err=>{this.responseobj=err}
    )

  }

   // it deletes all the records of the booking table//

   deleteByMobileno(){
     
     console.log("@@@@-----"+this.sessionMobileno);
     this.deleteService.deleteByMobileno(this.sessionMobileno).subscribe(
       res=>{this.responseobj=res;console.log(res)
               
             },
       err=>{this.responseobj=err}
     )
 
   }



   


  

}
