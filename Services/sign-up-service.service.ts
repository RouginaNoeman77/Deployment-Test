import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from 'src/_Models/SignUp.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  baseUrl = "https://localhost:7117/api/User/Register"
  constructor(public http : HttpClient) { }

  Add(User:SignUp)
  {
    return this.http.post<SignUp>(this.baseUrl,User);
  }
}
