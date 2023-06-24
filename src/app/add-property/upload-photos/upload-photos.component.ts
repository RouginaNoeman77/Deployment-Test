import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyImagesServiceService } from 'src/app/Services/property-images-service.service';
import { AddPropertyServiceService } from 'src/app/Services/add-property-service.service';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css'],
  
})
export class UploadPhotosComponent {
  constructor(private router:Router,private service:PropertyImagesServiceService,private prop:AddPropertyServiceService){}
  Back(){
    this.router.navigateByUrl("/second-step");
  }
  Next(){
    this.router.navigateByUrl("/title");
  }
  files: File[] = [];
  imagesUrls: string[] = [];
	onSelect(event:any) {
		// console.log(event);
		this.files.push(...event.addedFiles);
    var input = event.target as HTMLInputElement;
    this.service.upload(this.files).subscribe((response)=>{
      this.prop.obj.prop_Images=response.urls;
    })
	}

	onRemove(event:any) {
		this.files.splice(this.files.indexOf(event), 1);
	}

}
