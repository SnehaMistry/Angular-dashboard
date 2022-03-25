import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';
import { Games } from '../games.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public games : Games[];
  constructor(private _gameService : GameService) { }

  ngOnInit(): void {
    this._gameService.getGameList().subscribe(res => 
      {
        this.games = res.results;
      });
  }

}
