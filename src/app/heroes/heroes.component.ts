import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];



  constructor(private heroService: HeroService, private messageSerive: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageSerive.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // Without Observable
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
