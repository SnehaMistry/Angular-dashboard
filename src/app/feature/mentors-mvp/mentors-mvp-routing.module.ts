import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorsFormContainerComponent } from './mentors-form-container/mentors-form-container.component';
import { MentorsListContainerComponent } from './mentors-list-container/mentors-list-container.component';
import { MentorsMvpComponent } from './mentors-mvp.component';

const routes: Routes = [
  { path: '', 
    component: MentorsMvpComponent,
    children:[
      {
        path: 'list',
        component: MentorsListContainerComponent
      },
      {
        path: 'add',
        component: MentorsFormContainerComponent
      }
      ,
      {
        path: 'edit/:id',
        component: MentorsFormContainerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsMvpRoutingModule { }
