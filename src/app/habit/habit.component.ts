import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ejc } from '../model/ejc';


@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent {
  
  habits = '';
  dalies = '';
  toDo = '';


  constructor() {
  }

  submit() {
    console.log('Habits:', this.habits);
    console.log('Dalies:', this.dalies);
    console.log('To Do:', this.toDo);
  }

  
 

}
