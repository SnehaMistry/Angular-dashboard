import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//**********************Custom imports*************************************/
import { Mentors } from '../mentors.model';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors-list-container',
  templateUrl: './mentors-list-container.component.html',
  styleUrls: ['./mentors-list-container.component.scss']
})
export class MentorsListContainerComponent implements OnInit {

  /**
   * @mentorsList$ as a observable and subscribe it to its child
   */
  public mentorsList$;
 
  constructor(private _mentorService : MentorsService) {
    this.mentorsList$ = new Observable<Mentors[]>();
   }

  ngOnInit(): void {
    this.getMentors();
  }

  /**
   * @description call delete api service  
   */
  public mentorDelete(id: number)
  {
    this._mentorService.deleteMentor(id).subscribe((res) => {
      this.getMentors();
    })
  }

  /**
   * @description get all mentors list from api service  
   */
  public getMentors()
  {
    this.mentorsList$ = this._mentorService.getAllMentors();
  }

}
