import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentors } from '../mentors.model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors-list-container',
  templateUrl: './mentors-list-container.component.html',
  styleUrls: ['./mentors-list-container.component.scss']
})
export class MentorsListContainerComponent implements OnInit {

  public mentorsList$;
 
  constructor(private _mentorService : MentorsService) {
    this.mentorsList$ = new Observable<Mentors[]>();
   }

  ngOnInit(): void {
    this.mentorsList$ = this._mentorService.getAllMentors();
  }

}
