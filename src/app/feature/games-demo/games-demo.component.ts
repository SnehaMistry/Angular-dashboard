import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { APIResponse, Games } from './games.model';

@Component({
  selector: 'app-games-demo',
  templateUrl: './games-demo.component.html',
  styleUrls: ['./games-demo.component.scss']
})
export class GamesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
