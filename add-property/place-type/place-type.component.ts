import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-place-type',
  templateUrl: './place-type.component.html',
  styleUrls: ['./place-type.component.css']
})
export class PlaceTypeComponent {
  constructor(private router:Router,public service:AddPropertyServiceService){}
  btn:any;
  Type(value:string){
    this.service.obj.Type=value;
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // add active class to clicked button
        button.classList.add('active');
      });
  });
  }
}
