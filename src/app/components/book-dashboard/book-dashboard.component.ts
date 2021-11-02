import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from "../../models/book";

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  booksInfo: Book[];

  constructor(private bookService: BookApiService) { }

  ngOnInit() {
    this.search('kaplan test prep');
  }

  search(searchString) {
    if (searchString.length > 2) {
      this.bookService.getBooks(searchString).subscribe(result => {
        const filteredResult = 
          result.filter(item => item.volumeInfo && item.volumeInfo.authors && item.volumeInfo.title && item.volumeInfo.publishedDate && item.volumeInfo.publisher);
        this.booksInfo = filteredResult;
      });
    } else if(searchString.length == 0) {
      this.search('kaplan test prep');
    }
  }

}
