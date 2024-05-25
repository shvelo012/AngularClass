import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  constructor() { }

  getHeroes() {
    return ["Superman", "Batman", "Gugava", "Elisashvili"];
  }
}
