import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Office, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apilink :string
  constructor(private http : HttpClient) { 
    this.apilink = environment.BaseURL;
  }

  public getClient(): Observable<Client[]>
  {
    return this.http.get<Client[]>(`${this.apilink}/client`);
  }

  public getOffice(): Observable<Office[]>
  {
    return this.http.get<Office[]>(`${this.apilink}/office`);
  }

  public saveUsers(user : User) : Observable<User[]>
  {
    return this.http.post<User[]>(`${this.apilink}/users`, user);
  }

  public getAllUsers()
  {
    return this.http.get<User[]>(`${this.apilink}/users`);
  }

  getByUserId(userId : number) : Observable<User>
  {
    return this.http.get<User>(`${this.apilink}/users/${userId}`);
  }

  updateUser(userDetails : User) : Observable<User[]>
  {
    return this.http.put<User[]>(`${this.apilink}/users/${userDetails.id}`, userDetails);
  }

  deleteUserDetail(userId : number) : Observable<User>
  {
    return this.http.delete<User>(`${this.apilink}/users/${userId}`);
  }
}
