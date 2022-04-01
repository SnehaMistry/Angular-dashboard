import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Mentors } from 'src/app/feature/mentors-mvp/mentors.model';
import { MentorsListPresenterService } from '../mentors-list-presenter/mentors-list-presenter.service';

@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MentorsListPresentationComponent implements OnInit, OnChanges, AfterContentChecked {

  @ViewChild('originOverlay') private _filter: ElementRef;
  @ViewChild('search') private _searchValue: ElementRef;
  @Output() delMentor: EventEmitter<number> = new EventEmitter();
  @Input() public set mentorsList(value: Mentors[] | null) {
    if (value) {
      this._mentorsList = value;
      this.length = this.mentorsList.length;
    }
  }

  public get mentorsList(): Mentors[] {
    return this._mentorsList;
  }


  length: number;
  private _mentorsList !: Mentors[];
  public tempMentorList: Mentors[];
  isOpen: boolean[];
  prevOpen?: number;
  flag: number;
  activePage: number = 0;
  public searchString: string;
  constructor(private _listService: MentorsListPresenterService, private _route: Router, private _changeDetectRef : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isOpen = [];
    for (let i = 0; i <= this.length; i++) {
      this.isOpen.push(false);
    }

    this._listService.deleteMentor$.subscribe((res: number) => {
      this.delMentor.emit(res);
    });

    this._listService.mentorLists$.subscribe(res => {
      this._mentorsList = res;
    });
    this.flag = 1;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tempMentorList = this._mentorsList;
  }

  ngAfterContentChecked() {
    this._changeDetectRef.markForCheck();
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

  public sortTable(data: any) {
    if (this.flag === 1) {
      this.flag = -1;
    }
    else {
      this.flag = 1;
    };
   this._listService.fetchPageData(1,this._listService.sortData(data.target['innerText'], this.tempMentorList, this.flag));
  }

  public clearFilter() {
    this._listService.clearFilter();
    this._mentorsList = this.tempMentorList;
  }

  public searchData() {
    this._listService.fetchPageData(1,this._listService.searchData(this._searchValue.nativeElement.value, this.tempMentorList));

  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mentorsList, event.previousIndex, event.currentIndex);
  }

  displayActivePage(activePageNumber: number) {
    this._listService.fetchPageData(activePageNumber, this.tempMentorList);
   
  }

}
