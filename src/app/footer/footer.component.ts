import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrolldownService } from '../Services/scrolldown.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  
  // @ViewChild('targetButton') targetButton: ElementRef|any;

  constructor(private scrollService: ScrolldownService) {}

  ngOnInit() {
    // this.scrollService.scrollEvent.subscribe(() => {
    //   this.targetButton.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //   // console.log("henaaa");
    // });
  }
}
