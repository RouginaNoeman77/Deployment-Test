import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { ImagesReadto } from 'src/_Models/ImagesReadDto';
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  //baseUrl:string="https://localhost:7117/api/Property/";
  baseUrl:string="https://localhost:7117/api/Property/GetPropertyByState/Accepted";
  constructor(public http:HttpClient) {
   }
  
   GetAll(){
    return this.http.get<PropertyReadDto[]>(this.baseUrl);
   }
  
}
