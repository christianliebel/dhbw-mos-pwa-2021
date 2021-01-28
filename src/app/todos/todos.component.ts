import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    this.todos = await this.todoService.getAll();
  }

  async add(title: string) {
    await this.todoService.add(title);
    this.getAll();
  }
}
