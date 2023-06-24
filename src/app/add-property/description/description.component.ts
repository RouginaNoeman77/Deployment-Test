import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  constructor(private router:Router,public service:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/title");
  }
  Next(){
    this.router.navigateByUrl("/third-step");
  }
  //******************************Handle number of letters************************* */
  maxChars = 500;
  hasError = false;
  
  
  onInputChange() {
    
    this.remainingChars = this.maxChars - this.service.obj.Description.length;
    this.hasError = this.service.obj.Description.length > this.maxChars;
  }
  get remainingChars() {
    
      if (this.service.obj.Description) {
        return this.maxChars - this.service.obj.Description.length;
      } else {
        return this.maxChars;
      }
    
  }
  
  set remainingChars(value: number) {
    this._remainingChars = value;
  }
  
  private _remainingChars: number|any;

  ngOnInit() {
    this.remainingChars = this.maxChars;
  }
}
