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

  public saveMentor(mentor : Mentors){
    return this._http.post<Mentors>(`${this.apilink}/mentors`,mentor);
  }

  public deleteMentor(id : number){
    return this._http.delete<Mentors>(`${this.apilink}/mentors/${id}`);
  }

  public getByID(id: number){
    return this._http.get<Mentors>(`${this.apilink}/mentors/${id}`);
  }

  public editMentor(mentor : Mentors, id : number){
    return this._http.put<Mentors>(`${this.apilink}/mentors/${id}`, mentor);
  }
}
