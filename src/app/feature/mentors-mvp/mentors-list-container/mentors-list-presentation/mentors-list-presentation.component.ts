import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mentors } from 'src/app/feature/mentors-mvp/mentors.model';
import { MentorsFormPresenterService } from '../../mentors-form-container/mentors-form-presenter/mentors-form-presenter.service';
import { MentorsListPresenterService } from '../mentors-list-presenter/mentors-list-presenter.service';

@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss']
})
export class MentorsListPresentationComponent implements OnInit {

  @Output() delMentor : EventEmitter<number> = new EventEmitter();
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
  constructor(private _listService: MentorsListPresenterService, private _route: Router) { }

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

    this._listService.deleteMentor$.subscribe((res : number) => {
      this.delMentor.emit(res);
    })
    
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

  public deleteMentor(id: number)
  {
    this._listService.delete(id);
  }

  public editMentor(id: number)
  {
    this._route.navigate([`user-mvp/edit/${id}`]);
  }
}
