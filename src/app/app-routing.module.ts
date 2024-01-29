import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { profile } from 'console';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {path: 'home2', component:Home2Component},
  {path: 'protfolio', component:ProtfolioComponent },
  {path: 'resume', component:ResumeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'professional-experience', component:ProfessionalExperienceComponent},
  {path:'**', component:Home2Component, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
