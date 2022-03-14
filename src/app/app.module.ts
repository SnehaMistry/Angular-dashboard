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
import { RefElementExampleComponent } from './feature/referenceElements/ref-element-example/ref-element-example.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { StudentFormComponent } from './feature/javascriptConcept/arrays/student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    ArraysComponent,
    RefElementExampleComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeBuilderModule,
    HttpClientModule,
    UsersModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }