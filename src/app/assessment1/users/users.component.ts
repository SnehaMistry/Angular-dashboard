import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
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
  public edituser : User;
  public isNewUserAdd : boolean = false;

  constructor(private userservice : UserService, private routes: Router) { }

  ngOnInit(): void {
    this.getClientNames();
    this.getOffices();
    this.getUserData();    
  }

  public loadNewuserForm()
  {
    this.isNewUserAdd = true;
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
        console.log(v);
        if(v)
        {
          this.isNewUserAdd = false; 
          this.getUserData();
        }        
      }
    });  
  }

  public updateUserDetail(user :User)
  {
    this.userservice.updateUser(user).subscribe({
      next : v => {
        if(v)
        {
          this.isNewUserAdd = false; 
          this.getUserData();
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

  public editUserDetails(userid : number)
  {
    if(userid > 0)
    {
      this.userservice.getByUserId(userid).subscribe(response =>{
        this.edituser = response;
        if(this.edituser)
        {
          this.loadNewuserForm();
        }
      }
       
      );
    }
  }

  public deleteUserDetails(userid : number)
  {
    console.log(userid);
    if(userid > 0)
    {
      this.userservice.deleteUserDetail(userid).subscribe(response =>{
        if(response)
        {
          this.getUserData();
        }
      }
       
      );
    }
  }
}
