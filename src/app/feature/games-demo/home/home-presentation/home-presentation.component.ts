import { Component, Input, OnInit } from '@angular/core';
import { Games } from '../../games.model';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent implements OnInit {

  @Input() public set games(value : Games[] | null)
  {
    if(value){
      this._gameList = value;
    }
  }
  
  public get games()
  {
    return this._gameList;
  }
  
  private _gameList : Games[];
  constructor() { }

  ngOnInit(): void {
  }

}
