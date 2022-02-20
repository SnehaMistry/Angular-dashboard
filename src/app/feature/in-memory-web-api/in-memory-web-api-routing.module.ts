import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Component/detail/detail.component';
import { WebApiComponent } from './Component/web-api/web-api.component';

const routes: Routes = [
  {path:'', 
    children:[
      {path : '', component: WebApiComponent},
      {path : 'detail/:id', component: DetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InMemoryWebAPIRoutingModule { }
