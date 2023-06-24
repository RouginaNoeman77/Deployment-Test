import { Component, OnInit } from '@angular/core';
import { ScrolldownService } from '../Services/scrolldown.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  role:string='';
  constructor(private scrollService: ScrolldownService,public authservice:AuthService,private router:Router) {}
  ngOnInit(): void {
    this.authservice.isAuth$.subscribe(a=>{
      this.role=a.role});
  }

  scroll() {
    // this.scrollService.scrollEvent.emit();
    // console.log("scrolled");
    window.scroll(0,10000); 
  }

  //navigation
  Go(){
    this.router.navigateByUrl("");
  }

}
 
