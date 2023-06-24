import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router:Router) {}
  Next(next:string){
    this.router.navigateByUrl(next);
    
  }
  Back(back:string){
    this.router.navigateByUrl(back);
  }
  
  @Input() next:string='';
  @Input() back:string='';
  @Input() p1:number=0;
}
