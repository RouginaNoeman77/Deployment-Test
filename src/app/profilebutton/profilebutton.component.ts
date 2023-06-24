import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-profilebutton',
  templateUrl: './profilebutton.component.html',
  styleUrls: ['./profilebutton.component.css']
})
export class ProfilebuttonComponent implements OnInit{
  role:string='';

  constructor(public authservice:AuthService){}
  ngOnInit(): void {
    this.authservice.isAuth$.subscribe(a=>{
      this.role=a.role;
    })
  }

}
