import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuilderModule } from './feature/resume-builder/resume-builder.module';

const routes: Routes = [
  {path: '', pathMatch : 'full' ,redirectTo : "resume-builder"},
  {path:"resume-builder", loadChildren: () => import('./feature/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)},
  {path:"users", loadChildren: () => import('./assessment1/users/users.module').then(m => m.UsersModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
