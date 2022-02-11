import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeComponent } from './componant/resume/resume.component';
import { ResumeFormComponent } from './componant/resume-form/resume-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeComponent,
    ResumeFormComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
