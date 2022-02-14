import { Component, OnInit } from '@angular/core';
import { Client, Office, User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public clientnameOptions: Client[];
  public OfficeOptions: Office[];
  public UserList: User[];
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.getClientNames();
    this.getOffices();
    this.getUserData();
  }

  // Get the client data from the json server
  public getClientNames()
  {
    this.userservice.getClient().subscribe({
      next: (clientnames) => {
        this.clientnameOptions = clientnames;
      },
      error: (e) => alert("Somethings Went Wrong")
    });
  }

  // get office data from the json server
  public getOffices()
  {
    this.userservice.getOffice().subscribe({
      next: (offices) => {
        this.OfficeOptions = offices;
      },
      error: (e) => alert("Somethings Went Wrong")
    });
  }

  //save the user details on submit of the form
  public saveUserDetail(user : User)
  {
    this.userservice.saveUsers(user).subscribe({
      next : v => {
        if(v.length > 0)
        {
          alert("form submiited successfully");
        }
        
      }
    });  
  }

  //method for get all the user data from user
  public getUserData()
  {
    this.userservice.getAllUsers().subscribe({
      next : users => {
      this.UserList = users;
      }
  });
  }
}
