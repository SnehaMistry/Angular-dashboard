import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Student } from './student.model';

@Injectable()
export class StudentServiceService {

  private _studentSubject = new BehaviorSubject<Student[]>([]);
  public studentDetails$ : Observable<Student[]>;
  public editStudent = new Subject<Student>();
  private _studentDetails : Student[] = [];
  private _id = 1;

  constructor(private _fb: FormBuilder, private _route : Router) {
    this.studentDetails$ = this._studentSubject.asObservable();
    let student : Student = {
      id :1, 
      name: 'Test person1',
      section: '1',
      phoneNo: '596555635', 
      mark1: 20,
      mark2: 30,
      mark3: 40
    };
    this._studentDetails.push(student);
    this.getStudents();
   }

   public getStudents()
   {
     this._studentSubject.next(this._studentDetails);

   }

   public add(student: Student) {
    student.id = ++this._id;
    this._studentDetails.push(student);
    this._studentSubject.next(Object.assign([], this._studentDetails));
    this.getStudents();
  }

  public edit(student : Student)
  {
    let index = this._studentDetails.findIndex(student => student.id  === student.id);
    this._studentDetails[index].name = student.name;
    this._studentDetails[index].section = student.section;
    this._studentDetails[index].phoneNo = student.phoneNo;
    this._studentDetails[index].mark1 = student.mark1;
    this._studentDetails[index].mark2 = student.mark2;
    this._studentDetails[index].mark3 = student.mark3; 
  }

  public editById(id: number)
  {
      this._studentDetails.find(stud => {
        if(stud.id === id)
        {
          this.editStudent.next(stud); 
        }
      })   
  }

  public delete(id : number){
    let index = this._studentDetails.findIndex(student => student.id  === id);
    this._studentDetails.splice(index,1);
  }

  public buildForm()
  {
    return this._fb.group({
      id: [],
      name: ['', Validators.required],
      section: ['', Validators.required],
      phoneNo: ['', Validators.required],
      mark1 : [null],
      mark2 : [null],
      mark3 : [null]
    }); 
  }
}
