import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-methods',
  templateUrl: './object-methods.component.html',
  styleUrls: ['./object-methods.component.scss']
})
export class ObjectMethodsComponent implements OnInit {
  
  key : string = "name";

  person = {
    name: "John",
    lastname : "Doe",
    age: 30,
    city: "New York",
    fullName : function() { return this.name + this.lastname}
  };


  values = Object.values(this.person);
  keys = Object.keys(this.person);
  objString : string = JSON.stringify(this.person);

  
  constructor() { }

  ngOnInit(): void {
  }

}
