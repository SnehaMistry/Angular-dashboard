import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesDemoRoutingModule } from './games-demo-routing.module';
import { GamesDemoComponent } from './games-demo.component';
import { GameService } from './game.service';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { HomeComponent } from './home/home.component';
import { HomePresentationComponent } from './home/home-presentation/home-presentation.component';
import { SearchHeaderPresentationComponent } from './search-header/search-header-presentation/search-header-presentation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GamesInterceptor } from './interceptor/games.interceptor';

@NgModule({
  declarations: [
    GamesDemoComponent,
    SearchHeaderComponent,
    HomeComponent,
    HomePresentationComponent,
    SearchHeaderPresentationComponent
  ],
  imports: [
    CommonModule,
    GamesDemoRoutingModule,
    HttpClientModule
  ],
  providers:[
    GameService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GamesInterceptor,
      multi: true,
    },
  ]
})
export class GamesDemoModule { }
