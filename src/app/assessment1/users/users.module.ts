import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficePipe } from './Pipes/office.pipe';
import { ClientPipe } from './Pipes/client.pipe';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    UsersComponent,
    HeaderComponent,
    UserFormComponent,
    UserListingComponent,
    OfficePipe,
    ClientPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    OverlayModule
  ]
})
export class UsersModule { }
