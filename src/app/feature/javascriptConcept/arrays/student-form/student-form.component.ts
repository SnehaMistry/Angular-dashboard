import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.StudentFormBuilder();
  }

  public StudentFormBuilder(){
    this.studentForm = this.fb.group({
      id:[],
      name:[''],
      section:[''],
      marks: this.fb.array([
        this.getMarks()
      ]),
      total: [null]
    })
  }

  private getMarks()
  {
    this.fb.group({
      mark1: [null],
      mark2: [null],
      mark3: [null]
    });
  }
}
