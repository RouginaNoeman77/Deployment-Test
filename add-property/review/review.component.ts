import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserId } from 'src/_Models/UserId';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  
})
export class ReviewComponent {
  constructor( private router:Router ,public service:AddPropertyServiceService){
  }
  Publish(){
   
      const t = localStorage.getItem("Token");
      if(t != null){
        const tokenData = atob(t.split('.')[1]);
        const tokenObject = JSON.parse(tokenData);
        const userId:string = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        console.log(userId);
        this.service.obj.OwnerId=userId;
        console.log(this.service.obj.OwnerId);
      }
    
    
    this.service.add(this.service.obj).subscribe((data)=>{
      console.log(data);
    });
  }
  
}
