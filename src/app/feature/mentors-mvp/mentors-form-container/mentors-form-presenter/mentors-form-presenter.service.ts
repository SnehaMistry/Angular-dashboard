import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { FileArray, Mentors } from '../../mentors.model';

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
      firstname: ['',[Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      lastname: ['',[Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      username: ['',[Validators.required, Validators.pattern('^[_A-z0-9.]*((-|\s)*[_A-z0-9.])*$')]],
      email: ['',[Validators.required, Validators.email]],
      age: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(1), Validators.maxLength(3)])],
      gender: ['', Validators.required],
      birthdate: ['',Validators.required],
      location: ['',[Validators.required, Validators.pattern('^[_A-z]*((-|\s)*[_A-z])*$')]],
      address: ['',Validators.required],
      mobilenumber: ['',[Validators.required, Validators.pattern('^[+0-9]*((-|\s)*[+0-9])*$')]],
      uploadFile : ['']
    })
  }

  public addForm(mentorForm : FormGroup){
    if(!mentorForm.valid){
      return;
    }
    this.mentorFromData.next(mentorForm.value);
  }

  public checkUniqueFile(files : FileArray[], mentors: Mentors[] | null)
  {
    return mentors?.some(mentor => {
      files.find(file => (mentor.uploadFile?.name) ? mentor.uploadFile.name === file.name : file.name);
    });
    
  }

}
