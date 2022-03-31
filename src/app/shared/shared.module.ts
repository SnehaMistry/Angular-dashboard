import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './component/filter/filter.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DragAndDropFileComponent } from './component/drag-and-drop-file/drag-and-drop-file.component';
import { AppfileDragDropDirective } from './directives/appfile-drag-drop.directive';
import { ProgressFileComponent } from './component/drag-and-drop-file/progress-file/progress-file.component';



@NgModule({
  declarations: [
    FilterComponent,
    PaginationComponent,
    DragAndDropFileComponent,
    AppfileDragDropDirective,
    ProgressFileComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterComponent,
    PaginationComponent,
    DragAndDropFileComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
