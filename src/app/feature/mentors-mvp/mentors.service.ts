import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mentors } from './mentors.model';


@Injectable()
export class MentorsService {
  apilink : string
  constructor(private _http: HttpClient) {
    this.apilink = environment.BaseURL;
   }

  public getAllMentors()
  {
    return this._http.get<Mentors[]>(`${this.apilink}/mentors`);

  }
}
