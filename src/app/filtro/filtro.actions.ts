import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'pendientes' | 'completados';

export const setFiltro = createAction(
  '[Filro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
