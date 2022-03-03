import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ResumeBuilderModule } from './feature/resume-builder/resume-builder.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './assessment1/users/users.module';
import { InMemoryDataService } from './core/Services/in-memory-data.service';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { JavascriptConceptModule } from './feature/javascript-concept/javascript-concept.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeBuilderModule,
    HttpClientModule,
    UsersModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService), 
    JavascriptConceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
