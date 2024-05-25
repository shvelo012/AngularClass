import { Component } from '@angular/core';
import { HeroesServiceService } from '../heroes-service.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(
    private heroesService: HeroesServiceService
  ) { }

  heroes = this.heroesService.getHeroes();
}
