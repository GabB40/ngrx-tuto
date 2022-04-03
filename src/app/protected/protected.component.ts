import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBooksRequest } from './../store/actions/book.actions';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getBooksRequest());
  }
}
