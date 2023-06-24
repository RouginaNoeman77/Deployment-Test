import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { ExploreingComponent } from './Secured/exploreing/exploreing.component';
import { authGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { CardComponent } from './card/card.component';
import { ProfilePageComponent } from './profile/profile.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FirstStepComponent } from './add-property/first-step/first-step.component';
import { GetStartedComponent } from './add-property/get-started/get-started.component';
import { SecondStepComponent } from './add-property/second-step/second-step.component';
import { ThirdStepComponent } from './add-property/third-step/third-step.component';
import { PlaceTypeComponent } from './add-property/place-type/place-type.component';
import { LocationComponent } from './add-property/location/location.component';
import { CountsComponent } from './add-property/counts/counts.component';
import { DescriptionComponent } from './add-property/description/description.component';
import { PriceComponent } from './add-property/price/price.component';
import { ReviewComponent } from './add-property/review/review.component';
import { TitleComponent } from './add-property/title/title.component';
import { UploadPhotosComponent } from './add-property/upload-photos/upload-photos.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path:"auth/login",component:LoginComponent
  },
  {
    path:"secured/data",canActivate:[authGuard],component:ExploreingComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"property/details/:id",component:PropertyDetailsComponent
  },
  {
    path:"",component:CardComponent
  },
  {
    path:"profile" , component:ProfilePageComponent
  },
  {
    path:"edit" ,component:EditCustomerComponent
  },
  //doaaa
  { path: 'add-property', loadChildren: () => import('./add-property/add-property.module').then(m => m.AddPropertyModule) },
  {path:'first-step',component:FirstStepComponent},
{path:'get-started',component:GetStartedComponent},
{path:'', redirectTo:'get-started',pathMatch:'full'},
{path:'second-step',component:SecondStepComponent},
{path:'third-step',component:ThirdStepComponent},
{path:'place-type',component:PlaceTypeComponent},
{path:'location',component:LocationComponent},
{path:'counts',component:CountsComponent},
{path:'upload-photos',component:UploadPhotosComponent},
{path:'title',component:TitleComponent},
{path:'description',component:DescriptionComponent},
{path:'price',component:PriceComponent},
{path:'review',component:ReviewComponent},
{
  path:'adminprofile',component:AdminPageComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
