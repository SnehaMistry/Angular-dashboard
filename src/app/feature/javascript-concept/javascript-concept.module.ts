import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptConceptRoutingModule } from './javascript-concept-routing.module';
import { ObjectMethodsComponent } from './object-methods/object-methods.component';


@NgModule({
  declarations: [
    ObjectMethodsComponent
  ],
  imports: [
    CommonModule,
    JavascriptConceptRoutingModule
  ]
})
export class JavascriptConceptModule { }
