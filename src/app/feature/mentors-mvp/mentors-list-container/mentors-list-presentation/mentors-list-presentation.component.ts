import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Mentors } from 'src/app/feature/mentors-mvp/mentors.model';
import { FilterComponent } from 'src/app/shared/component/filter/filter.component';
import { MentorsListPresenterService } from '../mentors-list-presenter/mentors-list-presenter.service';

@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MentorsListPresentationComponent implements OnInit, OnChanges {

  @ViewChild('originOverlay') private _filter: ElementRef;
  @ViewChild('search') private _searchValue: ElementRef;
  @Output() delMentor: EventEmitter<number> = new EventEmitter();
  @Input() public set mentorsList(value: Mentors[] | null) {
    if (value) {
      this._mentorsList = value;
    }
  }

  public get mentorsList(): Mentors[] | null {
    return this._mentorsList;
  }


  length: number;
  private _mentorsList !: Mentors[];
  public tempMentorList : Mentors[];
  isOpen: boolean[];
  prevOpen?: number;
  flag :number;
  constructor(private _listService: MentorsListPresenterService, private _route: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isOpen = [];
    for (let i = 0; i <= this.length; i++) {
      this.isOpen.push(false);
    }

    this._listService.deleteMentor$.subscribe((res: number) => {
      this.delMentor.emit(res);
    });

    this._listService.mentorLists$.subscribe(res => {
      this.mentorsList = res;
      this.changeDetectorRef.markForCheck();
    });
    this.flag = 1;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tempMentorList = this._mentorsList;
  }

  public showModal(index: number) {
    if (index != undefined) {
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

  public deleteMentor(id: number) {
    this._listService.delete(id);
  }

  public editMentor(id: number) {
    this._route.navigate([`user-mvp/edit/${id}`]);
  }

  public filter() {
    this._listService.openFilterForm(this._filter, this.tempMentorList);
  }

  public sortTable(data: any)
  {
    if(this.flag === 1){
      this.flag = -1; 
    }
    else{
      this.flag = 1; 
    };
    this._mentorsList = this._listService.sortData(data.target['innerText'], this.tempMentorList, this.flag);
  }

  public clearFilter()
  {
    this._listService.clearFilter();
    this._mentorsList = this.tempMentorList;
  }

  public searchData(){
    this._listService.searchData(this._searchValue.nativeElement.value, this.tempMentorList);
  }
}
