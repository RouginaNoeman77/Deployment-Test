import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  constructor(private router:Router,public service:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/third-step");
  }
  Next(){
    this.router.navigateByUrl("/review");
  }
  isEditing = false;
  currencySymbol = '$';
  updatePrice(newPrice: number) {
    this.service.obj.PricePerNight = newPrice;
    this.isEditing = false;
  }
  
}
