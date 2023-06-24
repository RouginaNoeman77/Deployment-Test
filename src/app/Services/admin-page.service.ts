import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { PropertyReadDto } from 'src/_Models/PropertyReadDto';
import { property } from 'src/_Models/property';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {


  pendingBaseUrl:string="https://localhost:7117/api/Property/GetPropertyByState/pending";
  adminRefusal:string="https://localhost:7117/api/Property/Refusal/";
  adminAcceptance:string="https://localhost:7117/api/Property/Acceptance/";

  constructor(private Http:HttpClient) { }

  getAllPendingProperties(){
    return this.Http.get<PropertyReadDto[]>(this.pendingBaseUrl)
  }

  propertyRefused(propId:number){
    return this.Http.get(this.adminRefusal+propId);
  }

  propertyAccepted(propId:number){
    return this.Http.get(this.adminAcceptance+propId);
  }
}

/*const id = 123; // Replace with your ID of type number
const url = 'https://your-web-api-endpoint.com/your-endpoint';

// Create an instance of HttpParams and set the ID as a parameter
const params = new HttpParams().set('id', id.toString());

// Send an HTTP PUT request to the server with the ID as a parameter
this.http.put(url, { params }).subscribe((response) => {
  // Handle the response from the server
});*/