import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { client } from 'src/_Models/ClientDto';
import { property } from 'src/_Models/property';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { request } from 'src/_Models/RequestDto';
// import { client } from './model/client';
// import { Property } from './model/property';
// import { request } from './model/request';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseurl1:string ="https://localhost:7117/api/user/"
  baseurl2:string = "https://localhost:7117/api/Property/GetPropertyByOwnerId/"
  baseurl3:string = "https://localhost:7117/api/Reservations/user/"
  constructor(public Http:HttpClient) { }

  getUserDateilsbyid(userid:string)
  {
    return this.Http.get<client>(this.baseurl1 + userid) 
  }

  getpropertybyownerid(ownerid:string)
  {
    return this.Http.get<PropertyReadDto>(this.baseurl2 + ownerid)
  }
  getreservationsbyuserid(userid:string)
  {
    return this.Http.get<request>(this.baseurl3 + userid)
  }
}