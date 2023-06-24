import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  constructor(private router:Router){}
    Start(){
      this.router.navigateByUrl("/first-step"); 
    }
  
}
