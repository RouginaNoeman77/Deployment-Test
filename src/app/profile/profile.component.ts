import { Component, OnInit } from '@angular/core';
// import { client } from '../model/client';
import { Subscription } from 'rxjs'
// import { ClientService } from '../client.service';
// import { Property } from '../model/property';
// import { request } from '../model/request';
import { Router } from '@angular/router';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { request } from 'src/_Models/RequestDto';
import { client } from 'src/_Models/ClientDto';
import { ClientService } from '../Services/client.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilePageComponent {
  userid = "";
  appartment: PropertyReadDto[] | any = null;
  request: request[] | null = null
  // userrequest = request? 0 : 1 ;
  user: client | null = null;
  sub: Subscription | null = null
  constructor(public clientservice: ClientService,
    private router: Router
    // private ac:ActivatedRoute
  ) {
  }
 
  ngOnInit(): void {

    
    const t = localStorage.getItem("Token");
    if (t != null) {
      const tokenData = atob(t.split('.')[1]);
      const tokenObject = JSON.parse(tokenData);
      const userId = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log(userId);

      this.sub =
      this.clientservice.getUserDateilsbyid(userId).subscribe(r => {
        this.user = r;
        console.log(r);
      })

      this.clientservice.getpropertybyownerid(userId).subscribe(app => {
        // for let(i=0;i<app.length;i++)
        this.appartment = (app);
        // console.log(this.appartment);
      })
    }




      

      // this.sub=this.ac.params.subscribe(data=>{
      //   this.clientservice.getreservationsbyuserid(data['id']).subscribe(res=>{
      //     this.request?.push(res);
      //   })
      // })
    }
    Go(){
      this.router.navigateByUrl("contact");
    }

  }