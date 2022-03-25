import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './component/filter/filter.component';



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports:[
    ReactiveFormsModule
  ],
  exports: [
    FilterComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
