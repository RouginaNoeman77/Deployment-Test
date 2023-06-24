import { Component, OnInit } from '@angular/core';
import { AdminPageService } from '../Services/admin-page.service';
import { Router } from '@angular/router';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { ClientService } from '../Services/client.service';
import { client } from 'src/_Models/ClientDto';
import { Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  properties:PropertyReadDto[]=[];
  user: client | null = null;
  sub: Subscription | null = null;
  role:string='';

  constructor(public adminServ:AdminPageService , private router:Router,public clientservice: ClientService,
    public authservice:AuthService){}

 
  value:any;
  ngOnInit(): void {
    //code to the admin
    this.authservice.isAuth$.subscribe(a=>{
      this.role=a.role});
    
    const t = localStorage.getItem("Token");
    if (t != null) {
      const tokenData = atob(t.split('.')[1]);
      const tokenObject = JSON.parse(tokenData);
      const userId = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log(userId);


      this.sub = this.clientservice.getUserDateilsbyid(userId).subscribe(r => {
        this.user = r;
        console.log(r);
      })
    }
    
    //////////////////
      this.adminServ.getAllPendingProperties().subscribe(data=>{
      this.properties=data;
      })
      console.log(this.properties);
    };
  
  
  navigate(id:number)
  {
    this.router.navigateByUrl("/property/details/"+id);
  }

  acceptedProperty(id:number)
  {
    this.adminServ.propertyAccepted(id).subscribe(a=>{
      console.log(a);
      
    });  
  }

  refusedProperty(id:number){
    this.adminServ.propertyRefused(id).subscribe(
    );
    console.log("refused");
    
  }
  Go(){
    this.router.navigateByUrl("contact");
  }
}