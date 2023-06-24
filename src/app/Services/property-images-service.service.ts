import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddImageDto } from 'src/_Models/AddImageDto';

@Injectable({
  providedIn: 'root'
})
export class PropertyImagesServiceService {

  constructor(private client:HttpClient) { }
  public upload(files:File[]): Observable<AddImageDto>{
    var form=new FormData();
    for (let i = 0;i < files.length ;i++){
      form.append('file',files[i]);
    }
    return this.client.post<AddImageDto>(
      'https://localhost:7117/api/FileImage/multi',form
    )
  }
  
}
