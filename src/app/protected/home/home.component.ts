import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBooksCount } from './../../store/selectors/book.selectors';
import { selectUserIsLoggedIn } from './../../store/selectors/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  isUserLoggedIn$!: Observable<boolean>;
  booksCount$!: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.store.select(selectUserIsLoggedIn);
    this.booksCount$ = this.store.select(selectBooksCount);
  }

}
