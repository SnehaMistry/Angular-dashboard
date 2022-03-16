import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MentorsFormPresenterService } from '../mentors-form-presenter/mentors-form-presenter.service';

@Component({
  selector: 'app-mentors-form-presentation',
  templateUrl: './mentors-form-presentation.component.html',
  styleUrls: ['./mentors-form-presentation.component.scss'],
  viewProviders: [MentorsFormPresenterService]
})
export class MentorsFormPresentationComponent implements OnInit {

  mentorForm : FormGroup;
  @Output() formClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _formService : MentorsFormPresenterService) { }

  ngOnInit(): void {
    this.mentorForm = this._formService.buildForm();
    this._formService.mentorFromData.subscribe(res => {
      console.log(res);
    })
  }


  public mentorSave()
  {
    if(this.mentorForm.value)
    {
     
      this._formService.addForm(this.mentorForm);
    }
  }

  public get formControl() {
    return this.mentorForm.controls;
  }

  resetForm(){
    this.formClose.emit(true);
  }



}
