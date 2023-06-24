import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { property } from 'src/_Models/property';

@Injectable({
    providedIn: 'root'
  })

  export class filterService{
    baseUrl:string="http://localhost:7117/api/Property/" 
    GetPropertyFilter(Type?:string |any,region?:string|any , area?:string|any, price_per_night?:number|any, capacity?:number|any ,){
       return this.http.get<property[]>(this.baseUrl+"FilterProperty/");
    }
    GetAllProperties(){
       return this.http.get<property[]>(this.baseUrl);
   }

    constructor(public http:HttpClient) { }
  }