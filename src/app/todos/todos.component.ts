import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  async sync() {
    // Eigene Todos laden
    const todos = await this.todoService.getAll();
    // HTTP-Request an Server
    const todosFromServer = await this.httpClient.post<Todo[]>(
      'http://localhost:3030/sync', todos).toPromise();
    // Zusammenführen mit eigenen Todos
    await this.todoService.todos.bulkPut(todosFromServer);
    // Liste aktualisieren
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
