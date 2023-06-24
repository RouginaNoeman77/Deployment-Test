import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';

const routes: Routes = [{ path: '', redirectTo:'get-started', pathMatch:'full'},{
  path:'first-step', component :FirstStepComponent},
{path:'get-started', component:GetStartedComponent},
{path:'second-step',component:SecondStepComponent},
{path:'third-step',component:ThirdStepComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPropertyRoutingModule { }
