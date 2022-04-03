import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './../../core/models/book.interface.';
import { selectBooks, selectBooksCount } from './../../store/selectors/book.selectors';
import { selectUserIsLoggedIn } from './../../store/selectors/user.selectors';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styles: [
  ]
})
export class MyBooksComponent implements OnInit {

  isUserLoggedIn$!: Observable<boolean>;
  booksCount$!: Observable<number>;
  books$!: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.store.select(selectUserIsLoggedIn);
    this.booksCount$ = this.store.select(selectBooksCount);
    this.books$ = this.store.select(selectBooks);
  }

}
