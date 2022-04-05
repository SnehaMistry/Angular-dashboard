import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mentors } from './mentors.model';


@Injectable()
/**
 * @description Service that provides the CRUD operation api methods.
 */
export class MentorsService {
  apilink : string
  constructor(private _http: HttpClient) {
    this.apilink = environment.BaseURL;
   }

  /**
   * Get all the mentors data from the JSON_SERVER and
   * @returns An Observable of the HttpResponse, with a response body in the requested type.
   */
  public getAllMentors()
  {
    return this._http.get<Mentors[]>(`${this.apilink}/mentors`);
  }

  /**
   * Save the Form data of new mwntor in JSON-SERVER 
   * @param mentor FormGroup values
   * @returns An Observable of the HttpResponse for the request, with a response body in the requested type.
   */
  public saveMentor(mentor : Mentors){
    return this._http.post<Mentors>(`${this.apilink}/mentors`,mentor);
  }

  /**
   * Delete a mentors from the list in JSON-SERVER
   * @param id of the deleted mentor
   * @returns An Observable of the HttpResponse for the request, with a response body in the requested type.
   */
  public deleteMentor(id : number){
    return this._http.delete<Mentors>(`${this.apilink}/mentors/${id}`);
  }

  /**
   * Get the mentor data Id wise.
   * @param id particular mentor id
   * @returns An Observable of the HttpResponse for the request, with a response body in the requested type.
   */

  public getByID(id: number){
    return this._http.get<Mentors>(`${this.apilink}/mentors/${id}`);
  }

  /**
   * Update the mentors data on the existing data on JSON-SERVER
   * @param mentor changed mentors formGroup values
   * @param id particular editable mentor id
   * @returns 
   */
  public editMentor(mentor : Mentors, id : number){
    return this._http.put<Mentors>(`${this.apilink}/mentors/${id}`, mentor);
  }
}
