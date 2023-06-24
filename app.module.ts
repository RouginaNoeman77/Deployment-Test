import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpServiceService } from './Services/sign-up-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Authentication/login/login.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ExploreingComponent } from './Secured/exploreing/exploreing.component'
import { TokenInterceptor } from './Interceptor/TokenInterceptor';
import { HomePageComponent } from './home-page/home-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { ProfilePageComponent } from './profile/profile.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FilterDialogueComponent } from './filter-dialogue/filter-dialogue.component';
import { QuestComponent } from './quest/quest.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProfilebuttonComponent } from './profilebutton/profilebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ExploreingComponent,
    HomePageComponent,
    CardComponent,
   ProfilePageComponent,
    PropertyDetailsComponent,
    NavBarComponent,
    FilterBarComponent,
    BannerComponent,
    FilterDialogueComponent,
    QuestComponent,
    EditCustomerComponent,
    UpdatePropertyComponent,
    AdminPageComponent,
    ProfilebuttonComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // CustomFormsModule
    NgImageSliderModule,
    NgbModule,
    NgxDropzoneModule
  ],
  providers: [SignUpServiceService,{
    provide:HTTP_INTERCEPTORS , useClass:TokenInterceptor ,multi:true  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
