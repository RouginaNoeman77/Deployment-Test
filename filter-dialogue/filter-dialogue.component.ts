import { Component, OnInit } from '@angular/core';
import { DialogueService } from '../Services/dialogue.service';
import { filterService } from '../Services/filter.service';
import { property } from 'src/_Models/property';
// import { DialogueService } from '../Services/general/dialogue.service';
// import { FilterService } from 'primeng/api';
// import { property } from '../Models/property';
// import { filterService } from '../Services/filterService';

@Component({
  selector: 'app-filter-dialogue',
  templateUrl: './filter-dialogue.component.html',
  styleUrls: ['./filter-dialogue.component.css']
})
export class FilterDialogueComponent implements OnInit{

 //dependancy injection 
 constructor(public dialogService:DialogueService , public filterService:filterService){}

//variables
  value:number=0;
  allProperties:property[]=[]
  numOfPeople: number = 0;
  rentalType:string="";
  priceRange:number=100;
  region:string="";
  area:string=""
  filteredProp:property[]=[];
  btn:any;
  alltypes:string[]=["apartment","camp","house","villa",];
  counter:number=0


//getting all properties
  ngOnInit(): void {
  this.filterService.GetAllProperties().subscribe(data=>{
    this.allProperties=data 
  })
  }

  //assigning type of rental to variable on click
  rentalTypeAssignment(){
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // add active class to clicked button
        button.classList.add('active');
      });
    });
    // this.rentalType=type;
    
    // this.btn=document.getElementById(type)!.style.backgroundColor="rgb(179, 173, 173)";
  }
  

//submit button
  filterProperties(){
    this.filterService.GetPropertyFilter(this.rentalType, this.region , this.area,this.numOfPeople, this.priceRange,).subscribe(data=>{
      this.filteredProp=data
      this.dialogService.showDialog=false;
      console.log(this.numOfPeople);
      console.log(this.region);
      console.log(this.rentalType);
      console.log(this.area);
      console.log(this.priceRange);

    })
  }

 //counter buttons of people 
 PeopleCounter(type:string){
  if(type==='+'){
    if(this.numOfPeople<10)
    this.numOfPeople++;
  }
  else{
    if(this.numOfPeople>0)
    this.numOfPeople--;
  }
 }

}