import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch : 'full' ,redirectTo : "webapi"},
  {path:"resume-builder", loadChildren: () => import('./feature/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)},
  {path:"users", loadChildren: () => import('./assessment1/users/users.module').then(m => m.UsersModule)},
  {path:"webapi", loadChildren: () => import('./feature/in-memory-web-api/in-memory-web-api.module').then(m => m.InMemoryWebAPIModule)},
  {path:"object", loadChildren: () => import('./feature/javascript-concept/javascript-concept.module').then(m => m.JavascriptConceptModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
