import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent {
  constructor(private router:Router){}
  Back(){
    this.router.navigateByUrl("/get-started");
  }
  Next(){
    this.router.navigateByUrl("/place-type");
  }
}
