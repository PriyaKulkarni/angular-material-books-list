import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookApiService } from './book-api.service';

describe('BookApiService', () => {
  let injector: TestBed;
  let bookService: BookApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookApiService]
    });
    injector = getTestBed();
    bookService = injector.get(BookApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: BookApiService = TestBed.get(BookApiService);
    expect(service).toBeTruthy();
  });

  xdescribe('#getBooks', () => {
    it('should return an Observable<Book[]>', () => {
      const dummyBooks = [{
        id: 'abc',
        volumeInfo: {
          title: 'Title',
          publisher: 'Publisher',
          publishedDate: new Date(),
          authors: ['Author']
        }
      }];
  
      bookService.getBooks('xyz').subscribe(books => {
        expect(books.length).toBe(1);
        expect(books).toEqual(dummyBooks);
      });
  
      const req = httpMock.expectOne(`${bookService.BASE_URL}`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyBooks);
    });
  });
});
