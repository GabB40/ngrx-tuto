import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Book } from './../../core/models/book.interface.';

export const getBooksRequest = createAction(
  '[Protected] Get Books Request'
);

export const getBooksSuccess = createAction(
  '[Protected] Get Books Success',
  props<{ books: Book[] }>()
);

export const getBooksFailure = createAction(
  '[Protected] Get Books Failure',
  props<{ failureResponse: HttpErrorResponse }>()
);




