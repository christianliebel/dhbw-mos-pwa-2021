import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Dexie {
  todos: Dexie.Table<Todo, string>;

  constructor() {
    super('TodoDatabase');

    this.version(1).stores({
      todos: 'id'
    });
  }
}
