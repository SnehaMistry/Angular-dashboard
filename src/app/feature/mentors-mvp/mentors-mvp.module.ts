import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';

//**********************Custom imports*************************************/
import { MentorsMvpRoutingModule } from './mentors-mvp-routing.module';
import { MentorsMvpComponent } from './mentors-mvp.component';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MentorsFormPresentationComponent } from './mentors-form-container/mentors-form-presentation/mentors-form-presentation.component';
import { MentorsListPresentationComponent } from './mentors-list-container/mentors-list-presentation/mentors-list-presentation.component';
import { MentorsService } from './mentors.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MentorsMvpComponent,
    MentorsFormContainerComponent,
    MentorsListContainerComponent,
    MentorsFormPresentationComponent,
    MentorsListPresentationComponent,
  ],
  imports: [
    SharedModule,
    MentorsMvpRoutingModule,
    OverlayModule,
    DragDropModule
  ],
  providers:[
    MentorsService
  ]
})
export class MentorsMvpModule { }
