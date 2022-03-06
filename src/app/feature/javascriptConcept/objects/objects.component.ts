import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {

  // declare object of person 
  Person = {
   firstName:  'john',
   lastName : 'Doe',
   age: 20,
   fullName : function() {
     return this.firstName + " " + this.lastName
   } // function type
  }

  // define instance as object and string
  values = new Object();
  keys = new Object();
  objString = new String();
  constructor() { }

  ngOnInit(): void {

    //values method
    this.values = Object.values(this.Person);
    
    //keys method
    this.keys = Object.keys(this.Person);

    //convert object into string
    this.objString = JSON.stringify(this.Person);
  
  }

}
