import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ArraysComponent } from './feature/javascriptConcept/arrays/arrays.component';
import { ObjectsComponent } from './feature/javascriptConcept/objects/objects.component';
import { RefElementExampleComponent } from './feature/referenceElements/ref-element-example/ref-element-example.component';

const routes: Routes = [
  {path: '', pathMatch : 'full' ,redirectTo : "webapi"},
  {path: 'object', component: ObjectsComponent },
  {path: 'array', component: ArraysComponent },
  {path: 'elementRef', component: RefElementExampleComponent },
  {path:"resume-builder", loadChildren: () => import('./feature/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)},
  {path:"users", loadChildren: () => import('./assessment1/users/users.module').then(m => m.UsersModule)},
  {path:"webapi", loadChildren: () => import('./feature/in-memory-web-api/in-memory-web-api.module').then(m => m.InMemoryWebAPIModule)},
  { path: 'user-mvp', loadChildren: () => import('./feature/mentors-mvp/mentors-mvp.module').then(m => m.MentorsMvpModule) },

];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
