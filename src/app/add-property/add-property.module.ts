import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AddPropertyRoutingModule } from './add-property-routing.module';
import { AddPropertyComponent } from './add-property.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { PlaceTypeComponent } from './place-type/place-type.component';
import { LocationComponent } from './location/location.component';
import { CountsComponent } from './counts/counts.component';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddPropertyComponent,
    GetStartedComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    PlaceTypeComponent,
    LocationComponent,
    CountsComponent,
    UploadPhotosComponent,
    TitleComponent,
    DescriptionComponent,
    PriceComponent,
    ReviewComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AddPropertyRoutingModule,
    NgxDropzoneModule,
    NgImageSliderModule,
    NgbModule,

  ],
  exports:[
    GetStartedComponent,
    FirstStepComponent,
    SecondStepComponent
  ]
})
export class AddPropertyModule { }
