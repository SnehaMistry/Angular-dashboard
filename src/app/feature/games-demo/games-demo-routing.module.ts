import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesDemoComponent } from './games-demo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path : '', component: GamesDemoComponent, 
 children:[
  {path : '', pathMatch:'full', redirectTo: 'home'},
  {path:'home', component:HomeComponent}
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesDemoRoutingModule { }
