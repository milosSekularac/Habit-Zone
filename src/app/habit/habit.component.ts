import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ejc } from '../model/ejc';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {
  ejcs: Ejc[];
  
  habits = '';
  dalies = '';
  toDo = '';


  constructor() {
    this.ejcs = [
      new Ejc('Exercise 1', ['easy'], ['we']),
      new Ejc('Exercise 2', ['hard'], ['fr']),
      new Ejc('Exercise 3', ['medium'], ['sa']),
    ];
  }

  submit() {
    console.log('Habits:', this.habits);
    console.log('Dalies:', this.dalies);
    console.log('To Do:', this.toDo);
  }

  
 

}
