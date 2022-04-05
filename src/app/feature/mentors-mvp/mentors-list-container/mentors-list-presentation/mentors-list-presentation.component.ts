import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    }
  }

  public get mentorsList(): Mentors[] {
    return this._mentorsList;
  }


  length: number;
  private _mentorsList !: Mentors[];
  public tempMentorList: Mentors[];
  private _changedList !: Mentors[];
  isOpen: boolean[];
  prevOpen?: number;
  flag: number;
  activePage: number = 0;
  recordsPerPage : number = 5;
  public searchString: string;
  constructor(private _listService: MentorsListPresenterService, private _route: Router, private _changeDetectRef : ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.isOpen = [];
    for (let i = 0; i <= this.length; i++) {
      this.isOpen.push(false);
    }

    this._listService.deleteMentor$.subscribe((res: number) => {
      this.delMentor.emit(res);
    });

    this._listService.mentorLists$.subscribe(res => {
      // this._mentorsList = res;
      this._changedList = res;
      this._mentorsList =  this._listService.fetchPageData(1,this._changedList, this.recordsPerPage);
    });
    this.flag = 1;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this._changedList = this.tempMentorList = this._mentorsList;
  }


  ngAfterContentChecked() {
    this._changeDetectRef.markForCheck();
    this.length = this._changedList?.length;
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
    this._changedList = this._listService.sortData(data.target['innerText'], this.tempMentorList, this.flag);
    this._mentorsList =  this._listService.fetchPageData(1,this._changedList, this.recordsPerPage);
  }

  public clearFilter() {
    this._listService.clearFilter();
    this._mentorsList = this.tempMentorList;
  }

  public searchData() {
    this._changedList = this._listService.searchData(this._searchValue.nativeElement.value, this.tempMentorList);
   this._mentorsList =  this._listService.fetchPageData(1,this._changedList, this.recordsPerPage);

  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mentorsList, event.previousIndex, event.currentIndex);
  }

  displayActivePage(activePageNumber: number) {
   this._mentorsList = this._listService.fetchPageData(activePageNumber, this._changedList , this.recordsPerPage);
  }
   public showFile(event : any)
   {
     if(event.uploadFile)
     {
      // const byteString = atob(event.uploadFile.content);
      // const arrayBuffer = new ArrayBuffer(byteString.length);
      // const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      // for (let i = 0; i < byteString.length; i++) {
      //   int8Array[i] = byteString.charCodeAt(i);
      // }
      // const blob = new Blob([int8Array], { type: event.uploadFile?.type });
      // let file_URL = window.URL.createObjectURL(blob);
      // return file_URL;
      
      //another way to show image
      return this.sanitizer.bypassSecurityTrustResourceUrl(event.uploadFile.content);
    }
    else{
      return;
    }
   }

   public redirectImage(ref : HTMLButtonElement)
   {
     debugger
     if(ref.value)
     {
      window.open(ref.value);
     }      
   }

}
