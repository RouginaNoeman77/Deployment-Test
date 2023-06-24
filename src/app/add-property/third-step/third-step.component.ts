import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent {
  constructor(private router:Router){}
  Back(){
    this.router.navigateByUrl("/counts");
  }
  Next(){
    this.router.navigateByUrl("/price");
  }
}
