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
import { ObjectsComponent } from './feature/javascriptConcept/objects/objects.component';
import { ArraysComponent } from './feature/javascriptConcept/arrays/arrays.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    ArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeBuilderModule,
    HttpClientModule,
    UsersModule,
    BrowserAnimationsModule, 
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }