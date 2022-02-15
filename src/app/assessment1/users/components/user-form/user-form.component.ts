import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client, Office, User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  @Input() clientNames: Client[];
  @Input() offices: Office[];
  @Output() createUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() editToUser : User;

  ngOnInit(): void {
    this.buildUserForm();
    this.editFormUser();
  }

  public ngOnChanges()
  {
    if(this.editToUser != undefined)
    {
      this.editFormUser();
    }
    else{
      console.log('hi');
    }
  }

  public buildUserForm() {
    this.userForm = this.formBuilder.group({
      id:[],
      firstName: ['',[Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      lastName: ['',[Validators.required,  Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      clientName : ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      contactno: [null,[Validators.required, Validators.pattern('^[0-9]*((-|\s)*[0-9])*$'), Validators.minLength(10), Validators.maxLength(10)]],
      office: [null,Validators.required]
    });
  }

  public onUserSave()
  {
     if(this.userForm.valid)
     {
       this.createUser.emit(this.userForm.value);
       this.resetForm();
     }
  }

  private editFormUser()
  {
    if(this.editToUser != undefined )
    {
      this.userForm.patchValue(this.editToUser);
    }
    else{
      console.log("undefined");
    }
  }
  
  get formControl(){
    return this.userForm.controls;
  }

  resetForm(){
    this.userForm.reset();
  }
}
