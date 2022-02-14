import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {path:'' , 
    children : [
      {path:'', component : UsersComponent},
      {path:'user-form' , component: UserFormComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
