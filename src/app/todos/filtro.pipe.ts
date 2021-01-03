import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    // El profe usa un switch
    return todos.filter((todo) => {
      if (filtro === 'completados' ) {
        return todo.completado;
      }
      if (filtro === 'pendientes' ) {
        return !todo.completado;
      }
      if (filtro === 'todos' ) {
        return true;
      }
    });
  }

}
