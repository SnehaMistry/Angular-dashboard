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
  @Output() editId : EventEmitter<number> = new EventEmitter<number>(); 
  @Output() deleteId : EventEmitter<number> = new EventEmitter<number>(); 
  tempIDSelect : number;  
  ngOnInit(): void {
  }

  public editform(userid : number)
  {
      this.editId.emit(userid);
  }

  public deleteform(userid : number)
  {
    debugger;
    this.deleteId.emit(userid);
  }

}
