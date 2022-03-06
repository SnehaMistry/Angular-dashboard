import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  studentDetails = [
    {
      id: 1,
      name: 'Test Person1',
      section: 'Section 1',
      phoneNumber: '12345678'
    },
    {
      id: 2,
      name: 'Test Person2',
      section: 'Section 3',
      phoneNumber: '521398763'
    },
    {
      id: 3,
      name: 'Test Person3',
      section: 'Section 2',
      phoneNumber: '586498763'
    },
    {
      id: 4,
      name: 'Test Person4',
      section: 'Section 1',
      phoneNumber: '5235698763'
    },
    {
      id: 5,
      name: 'Test Person5',
      section: 'Section 4',
      phoneNumber: '5213956763'
    },
    {
      id: 6,
      name: 'Test Person6',
      section: 'Section 2',
      phoneNumber: '521698763'
    }
  ];

  length : number;
  arrToString : string;
  constructor() {
    if(Array.isArray(this.studentDetails))
    {
      console.log("Its a array");
    }
    this.getStudents();
   }

  ngOnInit(): void {
    this.length = this.studentDetails.length;
    // this.arrToString = this.studentDetails.toString();
    // console.log(this.studentDetails[0].toString());
    console.log(this.sectionstudent('section1'));
  }

  public getStudents()
  {
    this.studentDetails.forEach(student => {
    console.log("Id: "+ student.id + "\nName: " + student.name + "\nsection: " + student.section + "\nPhone No:" + student.phoneNumber);
    });
  }

  public add(){
    let student = {
      id: 7,
      name : "Test person 7",
      section: "Section 1",
      phoneNumber : "53487485848"
    }
    this.studentDetails.push(student);
  }

  public delete()
  {
    this.studentDetails.pop();
  }

  public sectionstudent(section : string){
    let stud = this.studentDetails.filter((student) => {
      
      
    })
  }
}
