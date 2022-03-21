import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Mentors } from '../mentors.model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './mentors-form-container.component.html',
  styleUrls: ['./mentors-form-container.component.scss']
})
export class MentorsFormContainerComponent implements OnInit {

  public editMentorData$ = new Observable<Mentors>();
  private _id : number
  constructor(private _mentorService : MentorsService, private _route : Router, private _routerAct : ActivatedRoute) { }

  ngOnInit(): void {
      this._id = this._routerAct.snapshot.params['id'];
      if(this._id)
      {
        this.editMentorData$ = this._mentorService.getByID(this._id);
      }
  }

  addMentors(mentorForm : Mentors)
  {
    this._mentorService.saveMentor(mentorForm).subscribe(
      (res) => {
      this._route.navigate(['user-mvp/list']);
    })
  }

  EditMentors(mentorForm: Mentors)
  {
    this._mentorService.editMentor(mentorForm,mentorForm.id).subscribe(
      (res) => {
        this._route.navigate(['user-mvp/list']);
      })
  }
}
