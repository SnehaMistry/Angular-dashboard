import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, ElementRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterComponent } from 'src/app/shared/component/filter/filter.component';
import { filterData, Mentors, searchFilter } from '../../mentors.model';

@Injectable({
  providedIn: 'root'
})
export class MentorsListPresenterService {

  private _deleteMentor = new Subject<number>();
  public deleteMentor$ = new Observable<number>();

  public _mentorLists = new Subject<Mentors[]>();
  public mentorLists$ = new Observable<Mentors[]>();

  private _filtervalues: filterData;
  private _componentRef: ComponentRef<any>;

  private startData = 1;
  private endData = 0;
  public listsize = 5;
  constructor(private _overlay: Overlay) {
    this.deleteMentor$ = this._deleteMentor.asObservable();
    this.mentorLists$ = this._mentorLists.asObservable();
  }

  public delete(id: number) {
    this._deleteMentor.next(id);
  }

  public openFilterForm(filter: ElementRef, mentors: Mentors[]) {
    const positionStrategy = this._overlay.position()
      .flexibleConnectedTo(filter)
      .withPositions([
        new ConnectionPositionPair(
          { originX: 'end', originY: 'bottom' },
          { overlayX: 'end', overlayY: 'top' },
        )
      ])
      .withPush(false);

    let config = new OverlayConfig({
      width: '320px',
      height: '90vh',
      positionStrategy,
      backdropClass: 'cdk-overlay-dark-backdrop',
      hasBackdrop: true
    });

    var overlayRef = this._overlay.create(config);
    const filterformPortal = new ComponentPortal(FilterComponent);
    this._componentRef = overlayRef.attach(filterformPortal);
    this._componentRef.instance.filterValues = this._filtervalues;


    this._componentRef.instance.filterdata$?.subscribe((res: any) => {
      this._filtervalues = res;
      var filterresult = this.applyFilter(res, mentors);
      this._mentorLists.next(filterresult);
      overlayRef.detach();
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    })
  }

  public clearFilter() {
    this._filtervalues = { age: null, gender: '' };
    this._componentRef.instance.filterValues = this._filtervalues;
  }

  public applyFilter(data: filterData, mentors: Mentors[]) {
    if (data.age || data.gender != '') {
      var startage = 0;
      var endage = 100;
      if (data.age == 25) {
        startage = 0;
        endage = 25;
      }
      else if (data.age == 50) {
        startage = 26;
        endage = 50;
      }
      else if (data.age == 75) {
        startage = 51;
        endage = 75;
      }
      else if (data.age == 100) {
        startage = 76;
        endage = 100;
      }

      if ((data.age) && (data.gender)) {
        return mentors?.filter(mentor => (mentor.age > startage && mentor.age < endage) && mentor.gender === data.gender);
      }
      else if (!data.age && data.gender) {
        return mentors?.filter(mentor => (mentor.gender === data.gender));
      }
      else {
        return mentors?.filter(mentor => (mentor.age > startage && mentor.age < endage));
      }
    }
    else {
      return mentors;
    }
  }

  public sortData(field: string, mentors: Mentors[], flag: number) {
    const properties = field.toLowerCase();
    
    return (flag === 1) ? mentors?.sort((first, second) => (first[properties as keyof Mentors] < second[properties as keyof Mentors]) ? -1 : (first[properties as keyof Mentors] > second[properties as keyof Mentors]) ? 1 : 0) : mentors?.sort((first, second) => (first[properties as keyof Mentors] < second[properties as keyof Mentors]) ? 1 : (first[properties as keyof Mentors] > second[properties as keyof Mentors]) ? -1 : 0);
  }

  public searchData(searchString: string, mentors: Mentors[]) {
    
    const properties = Object.keys(mentors[0]);
    return mentors.filter(mentor => {
      return properties.find((property) => {
        const matchString = typeof(mentor[property as keyof searchFilter]) === 'string' ? mentor[property as keyof searchFilter].toLowerCase() : ''; 
        return (matchString.startsWith(searchString?.toLowerCase()))? mentor : '';
      })
    });
    
  }

  public fetchPageData(activepage : number,  mentors : Mentors[], recordsPerPage : number)
  { 
    this.startData = recordsPerPage * (activepage - 1);
    this.endData = recordsPerPage * activepage;
    
    mentors = mentors.slice(this.startData, this.endData);
    // this._mentorLists.next(mentors);
    return mentors;
  }

}
