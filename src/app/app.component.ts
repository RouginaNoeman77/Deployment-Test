import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { DialogueService } from './Services/dialogue.service';
import { ScrolldownService } from './Services/scrolldown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor (private authservice:AuthService ,public dialogService:DialogueService){}
 

  
  ngOnInit(): void {
    this.authservice.isAuth$.subscribe((value)=>
      (this.isLoggedIn=value.isauth));
      this.authservice.GetData().subscribe(v=>console.log(v));

    this.checkIfUserLoggedIn();  
  }
  

  logOut(){
    this.authservice.logOut();
  }
  checkIfUserLoggedIn() {
    if(localStorage.getItem('Token'))
    {
      this.authservice.isAuth$.next({isauth:true,role:localStorage.getItem('role')!});
    }
  }
}
