import { Component } from '@angular/core';
import { SignUpServiceService } from '../Services/sign-up-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUp } from 'src/_Models/SignUp.model';
import { ProfileImageService } from '../Services/profile-image.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   {

  imageUrl:string="";
  
  constructor(public signupserv :SignUpServiceService , ac : ActivatedRoute , private profileImageService : ProfileImageService ,
    private router:Router){}

  signup:SignUp = new SignUp('','','','',new Date("2019-01-16"),'','','');
  
  Add(){
    this.signupserv.Add(this.signup).subscribe(a=>{ 
        console.log(this.signup);
            
        //navigation property
        this.router.navigateByUrl("auth/login");
    })
  }
  

  uploadPhoto(e:Event):string|any{
    var input = e.target as HTMLInputElement;
    var file = input.files?.[0];
    if(!file) return;
    this.profileImageService.upload(file).subscribe((Response)=>{
      this.signup.ProfileImage=Response.url;
      this.imageUrl=Response.url
      return this.imageUrl
    })
  }
}
