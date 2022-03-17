import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Student } from './student.model';

@Injectable()
export class StudentServiceService {

  private _studentSubject = new BehaviorSubject<Student[]>([]);
  public studentDetails$ : Observable<Student[]>;
  
  private _studentDetails : Student[] = [];
  private _id = 1;

  constructor(private _fb: FormBuilder) {
    this.studentDetails$ = this._studentSubject.asObservable();
    let student : Student = {
      id :1,
      name : 'Test person1',
      section: '1',
      phoneNo: '596555635',
      marks:[20,60]
    }
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
  }

  public buildForm()
  {
    return this._fb.group({
      id: [],
      name: ['', Validators.required],
      section: ['', Validators.required],
      phoneNo: ['', Validators.required],
      marks: [this._fb.array([
        this.marksArray()
      ])]
    });
    
  }

  public marksArray()
  {
    return this._fb.group({
      mark1 : [null],
      mark2 : [null],
      mark3 : [null]
    });
  }
}
