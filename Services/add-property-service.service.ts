import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPropertyDto } from 'src/_Models/AddPropertyDto';

@Injectable({
  providedIn: 'root'
})
export class AddPropertyServiceService {
  baseUrl:string="https://localhost:7117/api/Property";
  obj:AddPropertyDto=new AddPropertyDto();
  constructor(public http:HttpClient) { }
  add(property:AddPropertyDto){
    return this.http.post<AddPropertyDto>(this.baseUrl,property);
  }

}
