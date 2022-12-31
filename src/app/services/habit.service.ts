import { Injectable } from '@angular/core';
import { Ejc } from '../model/ejc';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private ejcs:Ejc[];

  constructor() {this.ejcs = [
    new Ejc('Exercise 1', ['easy'], ['we']),
    new Ejc('Exercise 2', ['hard'], ['fr']),
    new Ejc('Exercise 3', ['medium'], ['sa']),
  ]; }

getHabits():Ejc[] {
  return this.ejcs;
}

}
