import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client, Office, User } from '../../models/user.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
  public length : number;
  ngOnInit(): void {
  }

  ngOnChanges()
  {
    this.length = this.userList?.length;
  }

  public editform(userid : number)
  {
      debugger;
      this.editId.emit(userid);
  }

  public deleteform(userid : number)
  {
    debugger;
    this.deleteId.emit(userid);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userList, event.previousIndex, event.currentIndex);
  }

}
