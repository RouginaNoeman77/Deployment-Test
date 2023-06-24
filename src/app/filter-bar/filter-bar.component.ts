import { Component, OnInit } from '@angular/core';
import { property } from 'src/_Models/property';
import { filterService } from '../Services/filter.service';
import { DialogueService } from '../Services/dialogue.service';

// import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent  {

properties:property[]=[];
filteredProperties:property[]=[];


constructor(public fService:filterService, public dialogueService:DialogueService){}
filterProperty(type:string){

  this.fService.GetPropertyFilter(type).subscribe(data=>{
  this.properties=data;
  })
}


}