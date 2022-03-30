import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './component/filter/filter.component';
import { PaginationComponent } from './component/pagination/pagination.component';



@NgModule({
  declarations: [
    FilterComponent,
    PaginationComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterComponent,
    PaginationComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
