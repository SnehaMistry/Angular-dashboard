import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryWebAPIRoutingModule } from './in-memory-web-api-routing.module';
import { WebApiComponent } from './Component/web-api/web-api.component';
import { SearchComponent } from './Component/search/search.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './Component/detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WebApiComponent,
    SearchComponent,
    DetailComponent
  ],
  imports: [
    SharedModule,
    InMemoryWebAPIRoutingModule
    
  ]
})
export class InMemoryWebAPIModule { }
