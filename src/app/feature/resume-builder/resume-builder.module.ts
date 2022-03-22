import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeComponent } from './componant/resume/resume.component';
import { ResumeFormComponent } from './componant/resume-form/resume-form.component';;
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeComponent,
    ResumeFormComponent
  ],
  imports: [
   SharedModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilderModule { }
