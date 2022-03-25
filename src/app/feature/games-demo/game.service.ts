import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIResponse, Games } from './games.model';

@Injectable()

export class GameService {

  private apilink : string;
  constructor(private _http : HttpClient) {
    this.apilink = environment.gamesBaseURL;
   }

  public getGameList()
  {
    return this._http.get<APIResponse<Games>>(`${this.apilink}games`);
  }
}
