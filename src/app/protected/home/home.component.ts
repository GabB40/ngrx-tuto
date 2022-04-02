import { BookService } from './../../core/services/book.service';
import { Book } from './../../core/models/book.interface.';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  books$!: Observable<Book[]>;
  
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

}
