import { Component, OnInit } from '@angular/core';
import { viewallService } from './viewall.service';
import{userSignupModel} from '../model/userSignupmodel'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css'],
  providers:[viewallService],
})
export class ViewallComponent implements OnInit {

  user:any;
  
  
  tempobj:userSignupModel;

  constructor(private viewservice:viewallService) 
  {

    


   }

  data:any;   
   getallfromts(){
     
     this.viewservice.getall().subscribe
     (
     
      res => { this.user=res;},
    
      err => { this.user = err }
      
      );


    alert(JSON.stringify(this.user))
    
    //this.tempobj=this.user;
    //this.tempobj.Name="aaa"
    //console.log("data--"+this.tempobj.Name)
  }

  ngOnInit() {
    this.getallfromts()

  }

}
