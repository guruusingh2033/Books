import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ng2-modal";
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
