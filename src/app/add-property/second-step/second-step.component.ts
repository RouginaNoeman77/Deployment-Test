import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent {
  constructor(private router:Router){}
  Back(){
    this.router.navigateByUrl("/counts");
  }
  Next(){
    this.router.navigateByUrl("/upload-photos");
  }
}
