import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  constructor(private router:Router,public service:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/upload-photos");
  }
  Next(){
    this.router.navigateByUrl("/description");
  }
  //******************************Handle number of letters************************* */
  maxChars = 32;
  hasError = false;
  
  
  onInputChange() {
    
    this.remainingChars = this.maxChars - this.service.obj.Title.length;
    this.hasError = this.service.obj.Title.length > this.maxChars;
  }
  get remainingChars() {
    
      if (this.service.obj.Title) {
        return this.maxChars - this.service.obj.Title.length;
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
