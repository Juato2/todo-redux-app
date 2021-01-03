import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Hola'),
  new Todo('cara'),
  new Todo('cola'),
  new Todo('Coca-Cola'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        // MAL: Siempre hay que romper la referencia,
        // no hay que mutar el objeto.
        // todo.completado = !todo.completado;
        // return todo;
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.eliminar, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.toggleAll, (state, { completado }) =>
  state.map((todo) => {
    return {
      ...todo,
      completado,
    };
  })
  ),
  on(actions.limpiar, (state) =>
    state.filter((todo) => !todo.completado)
  ),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
