import { Component, OnInit } from '@angular/core';
import { CardsService } from '../Services/cards.service';
import { ImagesReadto } from 'src/_Models/ImagesReadDto';
import { Router } from '@angular/router';
import { DialogueService } from '../Services/dialogue.service';
import { filterService } from '../Services/filter.service';
import { property } from 'src/_Models/property';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit
{
  properties:PropertyReadDto[]=[];
  filteredprop:property[]=[];

  constructor(public cardService:CardsService ,public dialogService:DialogueService ,public fService:filterService,private router:Router){}
  ngOnInit(): void {
    this.cardService.GetAll().subscribe(data=>{
      this.properties=data;
      console.log(this.properties)
    });
  }


  //submit dialog
  filterProperty(type:string){
  
    this.fService.GetPropertyFilter(type).subscribe(data=>{
    this.filteredprop=data;
    })
  }


  //navigation property
  navigate(id:number)
  {
    this.router.navigateByUrl("/property/details/"+id);
  }
  
}
