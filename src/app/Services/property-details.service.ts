import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { ReservationAddDto } from 'src/_Models/ReservationAddDto';
import { UserReadDto } from 'src/_Models/UserReadDto';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  baseUrl:string="https://localhost:7117/api/Property/";
  userBaseUrl:string="https://localhost:7117/api/User/";
  reservationUrl:string="https://localhost:7117/api/Reservations"
  constructor(public Http:HttpClient) { }

  getPropertyById(id:number){
    return this.Http.get<PropertyReadDto>(this.baseUrl+id);
  }
  getUserInfo(id:string){
    return this.Http.get<UserReadDto>(this.userBaseUrl+id);
  }
  addReservation(reservation:ReservationAddDto){
    return this.Http.post<ReservationAddDto>(this.reservationUrl,reservation);
  }
}
