import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client, Office, User } from '../../models/user.model';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  constructor() { }

  @Input() userList : User[];
  @Input() clientNames: Client[];
  @Input() offices: Office[];
  @Output() userId : EventEmitter<number> = new EventEmitter<number>(); 
  tempIDSelect : number;  
  ngOnInit(): void {
  }

  public editform(userid : number)
  {
      this.userId.emit(userid);
  }

}
