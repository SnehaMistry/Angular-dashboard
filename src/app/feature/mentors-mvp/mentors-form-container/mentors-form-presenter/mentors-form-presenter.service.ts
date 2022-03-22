import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { Mentors } from '../../mentors.model';

@Injectable()
export class MentorsFormPresenterService {

  public mentorFormData$ = new Observable<Mentors>();
  public mentorFromData = new Subject<Mentors>();

  constructor(private _fb: FormBuilder) { 
    this.mentorFormData$ = this.mentorFromData.asObservable();

  }

  public buildForm(){
    return this._fb.group({
      id: [],
      firstName: ['',[Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      age: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(1), Validators.maxLength(3)])],
      gender: ['', Validators.required]      
    })
  }

  public addForm(mentorForm : FormGroup){
    if(!mentorForm.valid){
      return;
    }
    this.mentorFromData.next(mentorForm.value);
  }
}
