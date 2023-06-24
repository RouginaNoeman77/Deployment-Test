import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{BehaviorSubject, Observable} from 'rxjs';
import { LoginDto } from 'src/_Models/LoginDto';
import { TokenDto } from 'src/_Models/TokenDto';

//wadyh ll modules 
interface authsate{
  role:string;
  isauth:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth$ = new BehaviorSubject<authsate>({role:"",isauth:false});

  constructor(private client: HttpClient) { }

  public login (credentials: LoginDto):Observable<TokenDto>{
    // var headers = new HttpHeaders();
    // headers.append('Authorization',`Bearer ${localStorage.getItem("Token")}` )
    return this.client.post<TokenDto>("https://localhost:7117/api/User/Login",credentials
      // headers=headers,
    );
  }

  public GetData(){
    return this.client.get('https://localhost:7117/api/User')
  }
  public logOut():void{
    localStorage.removeItem('Token');
    this.isAuth$.next({isauth:false,role:""});
  }
}
