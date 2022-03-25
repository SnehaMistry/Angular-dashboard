import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mentors } from '../../mentors.model';
import { MentorsFormPresenterService } from '../mentors-form-presenter/mentors-form-presenter.service';

@Component({
  selector: 'app-mentors-form-presentation',
  templateUrl: './mentors-form-presentation.component.html',
  styleUrls: ['./mentors-form-presentation.component.scss'],
  viewProviders: [MentorsFormPresenterService]
})
export class MentorsFormPresentationComponent implements OnInit {

  mentorForm : FormGroup

  @Input() public set editmentor (value : Mentors | null){
    if(value)
    {
      this.mentorForm.patchValue(value);
    }
  }
  @Output() add: EventEmitter<Mentors> = new EventEmitter<Mentors>();
  @Output() edit: EventEmitter<Mentors> = new EventEmitter<Mentors>();

  constructor(private _formService : MentorsFormPresenterService, private _route:Router) { }

  ngOnInit(): void {
    this.mentorForm = this._formService.buildForm();
   

    this._formService.mentorFormData$.subscribe(res => {
      (res.id === null) ? this.add.emit(res) : this.edit.emit(res);
    });
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


  cancelForm(){
    this._route.navigate([`user-mvp/list`]);
  }



}
