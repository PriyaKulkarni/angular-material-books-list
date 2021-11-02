import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { BookDashboardComponent } from './book-dashboard.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookApiService } from 'src/app/services/book-api.service';
import { of } from 'rxjs';
import { Book } from 'src/app/models/book';

describe('BookDashboardComponent', () => {
  let component: BookDashboardComponent;
  let fixture: ComponentFixture<BookDashboardComponent>;
  let injector: TestBed;
  let bookService: BookApiService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule],
      declarations: [BookDashboardComponent, BookListComponent],
      providers: [BookApiService]
    })
      .compileComponents();
    injector = getTestBed();
    bookService = injector.get(BookApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search() to fetch Books list', () => {
    const bookResponse: Book[]= [{
      id: 'abc',
      volumeInfo: {
        title: 'Title',
        publisher: 'Publisher',
        publishedDate: new Date(),
        authors: ['Author']
      }
    }];
    // let bookResponse: Book[];
    spyOn(bookService, 'getBooks').and.returnValue(of(bookResponse));
    component.search('kaplan test prep');
    expect(bookResponse[0].volumeInfo.title).toEqual('Title');
    expect(bookResponse[0].volumeInfo.publisher).toEqual('Publisher');
    expect(bookResponse[0].volumeInfo.authors[0]).toEqual('Author');
  });
});
