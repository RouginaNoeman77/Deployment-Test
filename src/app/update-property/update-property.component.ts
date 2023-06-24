import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyImagesServiceService } from '../Services/property-images-service.service';
import { AddPropertyServiceService } from '../Services/add-property-service.service';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent {
  constructor(private router:Router,private service:PropertyImagesServiceService,private prop:AddPropertyServiceService){}
  files: File[] = [];
  imagesUrls: string[] = [];
	onSelect(event:any) {
		// console.log(event);
    //code of draging
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
