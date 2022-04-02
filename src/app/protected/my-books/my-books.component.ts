import { Book } from './../../core/models/book.interface.';
import { Observable } from 'rxjs';
import { BookService } from './../../core/services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styles: [
  ]
})
export class MyBooksComponent implements OnInit {

  books$!: Observable<Book[]>;
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

}
