import { Component, OnInit, ViewChild } from '@angular/core';

import { Book } from '../book.model';
import { debug } from 'util';
// import { ViewChild } from '@angular/core/src/metadata/di';
import { Modal } from 'ng2-modal';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book(1, 'Book 1', 'John', 50, new Date(1990,1,17)),
    new Book(2, 'Book 2', 'John', 50, new Date(1990,1,17)),
    new Book(3, 'Book 3', 'John', 50, new Date(1990,1,17)),
    new Book(4, 'Book 4', 'John', 50, new Date(1990,1,17)),
    new Book(5, 'Book 5', 'John', 50, new Date(1990,1,17)),
    new Book(6, 'Book 6', 'John', 50, new Date(1990,1,17)),
    new Book(7, 'Book 7', 'John', 50, new Date(1990,1,17)),
    new Book(8, 'Book 8', 'John', 50, new Date(1990,1,17)),
    new Book(9, 'Book 9', 'John', 50, new Date(1990,1,17)),
    new Book(10, 'Book 10', 'John', 50, new Date(1990,1,17)),
    new Book(11, 'Book 11', 'John', 50, new Date(1990,1,17)),
    new Book(12, 'Book 12', 'John', 50, new Date(1990,1,17)),
    new Book(13, 'Book 13', 'John', 50, new Date(1990,1,17)),
  ];
  // showForm:boolean = false;
  bookId: number;
  name: string;
  author: string;
  pages: number;
  pubDate: string;
  @ViewChild('bookModal') bookModal;

  constructor() {
   }

  ngOnInit() {
  }

  editBook(book: Book){
    this.bookId = book.id;
    this.name = book.name;
    this.author = book.author;
    this.pages = book.pages;
    this.pubDate = book.publicationDate;
    this.bookModal.open();
    // this.showForm = true;
  }

  updateBook(){
    this.books.forEach(book => {
      if (book.id === this.bookId) {
        book.author = this.author;
        book.name = this.name;
        book.pages = this.pages;
        book.publicationDate = this.pubDate;
      }
    });
    this.bookModal.close();
  }

  hideForm(){
    this.bookModal.close();
  }

}
