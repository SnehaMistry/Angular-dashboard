import { Component, Input, OnInit } from '@angular/core';
import { Mentors } from 'src/app/feature/mentors-mvp/mentors.model';

@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss']
})
export class MentorsListPresentationComponent implements OnInit {

  @Input() public set mentorsList(value : Mentors[] | null){
      if(value){
        this._mentorsList = value;
      }
  }

  public get mentorsList() : Mentors[] | null {
    return this._mentorsList;
  }

  length : number;
  private _mentorsList !: Mentors[];
  isOpen: boolean[];
  prevOpen?: number;
  constructor() { }

  ngOnInit(): void {
    if(this.mentorsList)
    {
      this.length = this.mentorsList.length;
      console.log(length);  
    }    

    this.isOpen = [];
    for (let i = 0; i <= this.length; i++) {
      this.isOpen.push(false);
    }
  }

  public showModal(index : number )
  { 
    if(index != undefined)
    {
      if (this.isOpen[index]) {
        this.isOpen[index] = false; 
        this.prevOpen = undefined;
      } else {
        this.isOpen[index] = true; 
        if (this.prevOpen != undefined) {
          this.isOpen[this.prevOpen] = false;
        }
        this.prevOpen = index;
      }
    }
  }

}
