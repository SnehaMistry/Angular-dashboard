import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './componant/resume-form/resume-form.component';
import { ResumeComponent } from './componant/resume/resume.component';


const routes: Routes = [
  {path:'',
    children : [
      {path : '' , redirectTo : "resume-form", pathMatch:"full"},
      {path:'resume-form', component: ResumeFormComponent},
      {path:'resume', component: ResumeComponent},
      {path:'resume/:id', component:ResumeComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
