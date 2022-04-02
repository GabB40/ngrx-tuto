import { Book } from './../../core/models/book.interface.';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: readonly Book[] = [];

export const bookReducer = createReducer(
  // <readonly Book[]>[] ==> si on ne passe pas par la const initialState
  initialState
);
