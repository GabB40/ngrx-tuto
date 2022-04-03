import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from './../../core/models/book.interface.';
import { booksFeatureKey } from './../reducers/book.reducer';

export const selectBooksState = createFeatureSelector<Book[]>(booksFeatureKey);

export const selectBooks = createSelector(
    selectBooksState,
    books => books
);

export const selectBooksCount = createSelector(
    selectBooks,
    books => books?.length ?? 0
)