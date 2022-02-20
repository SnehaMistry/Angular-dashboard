import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heros } from 'src/app/feature/in-memory-web-api/model/heros.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'
  constructor(private http: HttpClient) { }

  private log(message : string)
  {
    console.log(message);
  }
  /** GET heroes from the server */
  public getHeroes(): Observable<Heros[]> {
    return this.http.get<Heros[]>(this.heroesUrl)
  }

  public getHero(id: number): Observable<Heros> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Heros>(url);
  }

  public deleteHero(id: number): Observable<Heros> {
  const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Heros>(url);
  }

  public addHero(hero: Heros): Observable<Heros> {
    return this.http.post<Heros>(this.heroesUrl, hero);
  }

  public updateHero(hero: Heros): Observable<Heros> {
    return this.http.put<Heros>(this.heroesUrl,hero);
  }

}
