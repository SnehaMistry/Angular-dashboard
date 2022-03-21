import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsListPresenterService {

  private _deleteMentor = new Subject<number>();
  public deleteMentor$ = new Observable<number>();
  constructor() {
    this.deleteMentor$ = this._deleteMentor.asObservable();
   }

  public delete(id:number)
  {
    this._deleteMentor.next(id);
  }
}
