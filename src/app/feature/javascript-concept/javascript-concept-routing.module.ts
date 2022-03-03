import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectMethodsComponent } from './object-methods/object-methods.component';

const routes: Routes = [
  {path : '', children : [
      {path:'', pathMatch:'full', redirectTo : 'object'},
      {path : 'object' , component: ObjectMethodsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptConceptRoutingModule {

 }
