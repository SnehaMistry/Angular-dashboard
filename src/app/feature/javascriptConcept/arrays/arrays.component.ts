import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {
  //array declaration
  studentDetails = [
    {
      id: 1,
      name: 'Test Person1',
      section: 'Section 1',
      phoneNumber: '12345678',
      marks: [30, 40, 50],
      total: 0
    },
    {
      id: 2,
      name: 'Test Person2',
      section: 'Section 1',
      phoneNumber: '521398763',
      marks: [30, 43, 70],
      total: 0
    },
    {
      id: 3,
      name: 'Test Person3',
      section: 'Section 2',
      phoneNumber: '586498763',
      marks: [36, 44, 59],
      total: 0
    },
    {
      id: 4,
      name: 'Test Person4',
      section: 'Section 1',
      phoneNumber: '5235698763',
      marks: [30, 49, 53],
      total: 0
    },
    {
      id: 5,
      name: 'Test Person5',
      section: 'Section 3',
      phoneNumber: '5213956763',
      marks: [38, 45, 52],
      total: 0
    },
    {
      id: 6,
      name: 'Test Person6',
      section: 'Section 1',
      phoneNumber: '521698763',
      marks: [42, 84, 60],
      total: 0
    }
  ];


  //variables for storing the methods output.
  length: number;
  arrToString: string;
  arrayFrom: string[];
  arrayOf: string[]
  concat: string
  studentresult: object[];
  studentonly: object;
  keys = [];
  isOpen: boolean[];
  prevOpen?: number;
  constructor() {
    var msg = "welcome";
    this.arrayFrom = Array.from(msg);
    this.arrayOf = Array.of(msg, "to arrays");
    console.log("array using from() method " + this.arrayFrom);
    console.log("array using of() method" + this.arrayOf);
    // console.log(this.studentDetails[0].name.concat(' of array'));
    if (Array.isArray(this.studentDetails)) {
      console.log("Its a array");
    }
  }

  ngOnInit(): void {
    this.length = this.studentDetails.length;
    this.isOpen = [];
    for (let i = 0; i <= this.length; i++) {
      this.isOpen.push(false);
    }
    this.studentresult = this.sectionstudent('Section 1');
    this.arrToString = JSON.stringify(this.studentDetails);
    console.log(this.arrToString);
    console.log(this.concatString());
    console.log("============ \n Example of copy within")
    console.log(this.studentDetails.copyWithin(5, 0, 2));
    console.log("\n ============\n  Example of every() check the section or name of the student is same:" + this.studentDetails.every(student => (student.section == 'Section 1' || student.name.startsWith("Test", 0))));
    console.log("\n ============\n  Example of some() check the section or name of the student is same:" + this.studentDetails.some(student => (student.section == 'Section 1' && student.name === 'Test')));
    console.log("Fill method :" + this.arrayFrom.fill('e', 2, 5));

    console.log("Example of Find() check the student section is 1 and who has highest marks:" + this.gethighestStudentFromSection());

    console.log("\n ============\nExample of includes() :" + this.studentDetails.includes(this.studentDetails[1]));
    console.log("\nExample of indexOf() method: " + this.studentDetails.indexOf(this.studentDetails[3]));
    console.log("\nExample of join() method: ");
    this.studentDetails.forEach((stud, index) => {
      let str = stud.marks.join(' ');
      console.log(str);
    });

    console.log("\n example of Keys() method: ");
    this.arrkeys();

    console.log("\nExample of lastIndexof() method: " + this.studentDetails.lastIndexOf(this.studentDetails[0]));
    console.log("\n Example of map() method: ");
    this.arrMap();

    console.log(this.studentDetails.reduceRight((acc, student) => {
      return [student.marks[0] + acc[0], student.marks[1] + acc[1], student.marks[2] + acc[2]]
    }, [0, 0, 0]));
  }

  public showModal(index : number)
  {
      if (this.isOpen[index]) {
        this.isOpen[index] = false; 
        this.prevOpen = undefined;
      } else {
        this.isOpen[index] = true; 
        if (this.prevOpen != undefined) {
          this.isOpen[this.prevOpen] = false;
        }
        this.prevOpen = index;
      }
  }

  public getStudents() {
    this.studentDetails.forEach(student => {
      console.log("Id: " + student.id + "\nName: " + student.name + "\nsection: " + student.section + "\nPhone No:" + student.phoneNumber);
    });

  }
 
  public AddStudent() {
    
  }

  public delete() {
    this.studentDetails.pop();
  }

  public sectionstudent(section: string) {
    return this.studentDetails.filter((student) => student.section === section);
  }

  public concatString() {
    // let student = this.studentDetails.map((stud) => {
    //   let newCopy = JSON.parse(JSON.stringify(stud));
    //   newCopy.name = (newCopy.id == 1) ? newCopy.name.concat("hello") : newCopy.name
    //   return newCopy;
    // });

    let student = this.studentDetails.map((newCopy) => {
      return {...newCopy, name: (newCopy.id == 1) ? newCopy.name.concat("hello") : newCopy.name}
    });
  }

  public gethighestStudentFromSection() {
    var max = 0, stud;
    this.studentDetails.filter((student) => {
      if (student.section == 'Section 1') {
        student.total = student.marks.reduce((sum, first) => sum + first, 0);
        if (student.total > max) {
          max = student.total;
        }
      }
    });
    console.log("\n ============\nMethod fIndindex() is used to get the element index: " + this.studentDetails.findIndex(stud => stud.total == max));
    var student = this.studentDetails.find(stud => stud.total == max);
    console.log(student);
  }

  public arrkeys() {
    let iterator = this.studentDetails.keys();
    for (let key of iterator) {
      console.log(key);
    }
  }


  public arrMap() {
    var stud = this.studentDetails.map(stud => {
      stud.marks.map((mark, index) => { stud.marks[index] = mark + 10 });
      return stud;
    });

    console.log(stud);
  }

  //overlay for options

  
}
