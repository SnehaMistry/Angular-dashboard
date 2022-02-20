import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/Services/hero.service';
import { Heros } from '../../model/heros.model';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.scss']
})
export class WebApiComponent implements OnInit {
  heroes: Heros[] = [];
  constructor(private heroservice : HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  public getHeros()
  {
    this.heroservice.getHeroes().subscribe(heros => this.heroes = heros);
  }

  public delete(hero : Heros)
  {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroservice.deleteHero(hero.id).subscribe();
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroservice.addHero({ name } as Heros)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}