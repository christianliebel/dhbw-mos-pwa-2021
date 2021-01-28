import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './todo';
import { v4 as uuidv4 } from 'uuid';

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

  add(title: string): Promise<any> {
    const id = uuidv4();
    return this.todos.add({ id, title, done: false });
  }
}
