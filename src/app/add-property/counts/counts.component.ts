import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent {
  constructor(private router:Router,public service:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/location");
  }
  Next(){
    this.router.navigateByUrl("/second-step");
  }
  
  
  // ********************Handle Guests Numbers****************************//
  plusGuests()
  {
    if(this.service.obj.Capacity<16){
      this.service.obj.Capacity = this.service.obj.Capacity+1;
    }
    else{
      this.service.obj.Capacity=16;
    }
  }
  minusGuests(){
    if(this.service.obj.Capacity != 0){
      this.service.obj.Capacity = this.service.obj.Capacity-1;
      if(this.service.obj.Capacity==0){
        this.service.obj.Capacity=1;
      }
    }
  }
  //***************************Handle Rooms Numbers********************** */
  plusRooms(){
    if(this.service.obj.NumberOfRooms<50){
      this.service.obj.NumberOfRooms = this.service.obj.NumberOfRooms+1;
    }
    else{
      this.service.obj.NumberOfRooms=50;
    }
  }
  minusRooms(){
    if(this.service.obj.NumberOfRooms != 0){
      this.service.obj.NumberOfRooms = this.service.obj.NumberOfRooms-1;
      if(this.service.obj.NumberOfRooms==0){
        this.service.obj.NumberOfRooms=1;
      }
    }
  }
  //***************************Handle Floors Number************************* */
  plusFloors(){
    if(this.service.obj.NumberOfFloors<50){
      this.service.obj.NumberOfFloors = this.service.obj.NumberOfFloors+1;
    }
    else{
      this.service.obj.NumberOfFloors=50;
    }
  }
  minusFloors(){
    if(this.service.obj.NumberOfFloors != 0){
      this.service.obj.NumberOfFloors = this.service.obj.NumberOfFloors-1;
      if(this.service.obj.NumberOfFloors==0){
        this.service.obj.NumberOfFloors=1;
      }
    }
  }
  //************************Handle Bathrooms Number******************* */
  plusBathrooms(){
    if(this.service.obj.NumberOfBathrooms<50){
      this.service.obj.NumberOfBathrooms = this.service.obj.NumberOfBathrooms+1;
    }
    else{
      this.service.obj.NumberOfBathrooms=50;
    }
  }
  minusBathrooms(){
    if(this.service.obj.NumberOfBathrooms != 0){
      this.service.obj.NumberOfBathrooms = this.service.obj.NumberOfBathrooms-1;
      if(this.service.obj.NumberOfBathrooms==0){
        this.service.obj.NumberOfBathrooms=1;
      }
    }
  }
  }

