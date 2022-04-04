import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
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
   public showFile(event : any)
   {
      const byteString = atob("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");
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: event.uploadFile?.type });
      let file_URL = window.URL.createObjectURL(blob);
      return file_URL
   }

   public redirectImage(ref : HTMLButtonElement)
   {
     window.open(ref.value);
   }

}
