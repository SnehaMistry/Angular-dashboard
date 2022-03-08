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
  msg : string;
  arrayFrom : string[];
  arrayOf : string[]
  concat: string
  sectionStudent : object[];
  constructor() {
    this.msg  = "welcome";
    this.arrayFrom = Array.from(this.msg);
    this.arrayOf = Array.of(this.msg);     
    console.log("array using from() method " + this.arrayFrom);
    console.log("array using of() method" + this.arrayOf);
    // console.log(this.studentDetails[0].name.concat(' of array'));
    if(Array.isArray(this.studentDetails))
    {
      console.log("Its a array");
    }
    // this.getStudents();
   }

  ngOnInit(): void {
    this.length = this.studentDetails.length;
    this.sectionStudent = this.sectionstudent('Section 1');
    this.concatString();
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
    return  this.studentDetails.filter((student) => student.section === section);
  }

  public concatString(){
    let student = this.studentDetails.map((stud) => {
      if(stud.id === 1)
      {
          stud.name = stud.name.concat(" hello");
      }
      return stud
    });
    console.log(student);
  }
}
