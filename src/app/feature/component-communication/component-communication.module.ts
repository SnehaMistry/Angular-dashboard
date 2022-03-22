import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ComponentCommunicationComponent } from './component-communication.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentServiceService } from './student-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    StudentFormComponent,
    StudentListComponent
  ],
  imports: [
   SharedModule,
    ComponentCommunicationRoutingModule
   
  ],
  providers:[
    StudentServiceService
  ]
})
export class ComponentCommunicationModule { }
