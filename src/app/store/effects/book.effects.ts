import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, of, switchMap, withLatestFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from './../../core/services/book.service';
import { getBooksFailure, getBooksRequest, getBooksSuccess } from './../actions/book.actions';
import { selectUserIsLoggedIn } from './../selectors/user.selectors';

@Injectable()
export class BookEffects {

  getBooks$ = createEffect(() => this.actions$.pipe(
    ofType(getBooksRequest),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.select(selectUserIsLoggedIn))
    )),
    switchMap(([action, isUserLoggedIn]) => {
      if (isUserLoggedIn)
        return this.bookService.getBooks().pipe(
          map(books => getBooksSuccess({ books: books })),
          catchError(failureResponse => of(getBooksFailure({ failureResponse })))
        )
      else return [];
    }
    )
  ));

  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private store: Store
  ) { }

}
