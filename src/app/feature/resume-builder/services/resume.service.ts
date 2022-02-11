import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resumedetails } from '../models/resumedetails.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  apilink :string
  empToEdit: Subject<Resumedetails> = new Subject<Resumedetails>();
  constructor(private http : HttpClient) {
      this.apilink = environment.BaseURL;
   }

  saveResumeDetails(empDetails : Resumedetails) : Observable<Resumedetails>
  {
    return this.http.post<Resumedetails>(`${this.apilink}/resume`, empDetails);
  }

  getResumeDeatils() : Observable<Resumedetails[]>
  {
    return this.http.get<Resumedetails[]>(`${this.apilink}/resume`);
  }

  getByResumeId(empId : number) : Observable<Resumedetails>
  {
    return this.http.get<Resumedetails>(`${this.apilink}/resume/${empId}`);
  }

  updateResumeDeatils(empDetails : Resumedetails) : Observable<Resumedetails>
  {
    return this.http.put<Resumedetails>(`${this.apilink}/resume/${empDetails.id}`, empDetails);
  }

  deleteResumeDetail(empId : number) : Observable<Resumedetails>
  {
    return this.http.delete<Resumedetails>(`${this.apilink}/resume/${empId}`);
  }
}
