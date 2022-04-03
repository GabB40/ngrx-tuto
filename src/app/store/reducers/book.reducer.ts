import { createReducer, on } from '@ngrx/store';
import { Book } from './../../core/models/book.interface.';
import { getBooksSuccess } from './../actions/book.actions';

export const booksFeatureKey = 'books';

export const initialState: Book[] = [];

export const bookReducer = createReducer(
  // <Book[]>[] ==> si on ne passe pas par la const initialState
  initialState,
  on(getBooksSuccess, (state, { books }) => books)
);
