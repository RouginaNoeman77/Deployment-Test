import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  
  constructor(private router:Router,public service:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/place-type");
  }
  Next(){
    this.router.navigateByUrl("/counts");
  }
  
    
    
}

