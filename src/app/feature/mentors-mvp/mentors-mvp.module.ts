import { NgModule } from '@angular/core';
import { MentorsMvpRoutingModule } from './mentors-mvp-routing.module';
import { MentorsMvpComponent } from './mentors-mvp.component';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MentorsFormPresentationComponent } from './mentors-form-container/mentors-form-presentation/mentors-form-presentation.component';
import { MentorsListPresentationComponent } from './mentors-list-container/mentors-list-presentation/mentors-list-presentation.component';
import { MentorsService } from './mentors.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPipe } from './search.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    MentorsMvpComponent,
    MentorsFormContainerComponent,
    MentorsListContainerComponent,
    MentorsFormPresentationComponent,
    MentorsListPresentationComponent,
    SearchPipe
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
