import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from 'src/_Models/LoginDto';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  form = new FormGroup({
    UserName: new FormControl<string>('',Validators.required),
    Password: new FormControl<string>('',Validators.required),
  });

  get UserName(){
    return this.form.get('UserName');
  }

  get Password(){
    return this.form.get('Password');
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    var credentials = new LoginDto();
    credentials.UserName=this.form.controls.UserName.value ?? '';
    credentials.Password=this.form.controls.Password.value ?? '';
    
    this.authService.login(credentials).subscribe((Token)=>{
      console.log(Token);
      localStorage.setItem("Token",Token.token);
      localStorage.setItem("role",Token.role);
      this.authService.isAuth$.next({isauth:true,role:Token.role});//anshor al 5abar
      console.log(Token.role);
    });
}
//User Id
getToken(e:Event){
  const t = localStorage.getItem("Token");
  if(t != null){
    const tokenData = atob(t.split('.')[1]);
    const tokenObject = JSON.parse(tokenData);
    const userId = tokenObject["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    console.log(userId);
    // const role = tokenObject["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    // console.log(role);
    

    
  }
}
}