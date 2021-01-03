import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // PODEMOS USAR LA DESESTRUCTURACIÓN
    // this.store.subscribe(state => {
    //   this.todos = state.todos;
    //   this.filtroActual = state.filtro;
    // });
    this.store.subscribe(({ todos, filtro }) => {
      this.todos        = todos;
      this.filtroActual = filtro;
    });
  }
}
