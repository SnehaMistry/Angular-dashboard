import { Component, OnInit } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private _studentService : StudentServiceService) { }

  ngOnInit(): void {
    this.studentForm = this._studentService.buildForm();
  }

  public onSubmitStudent()
  {
    if(this.studentForm.valid)
    {
      this._studentService.add(this.studentForm.value);
    }
  }

}
